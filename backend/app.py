import requests
from bs4 import BeautifulSoup as bs4

from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "localhost:3000"}})



def getCurrencyTable():
    # table .tablesorter.ratesTable
    # tr td (td a) (td a)
    url = "https://www.x-rates.com/table/?from=INR&amount=1"
    doc = bs4(requests.get(url).content, 'html.parser')
    rates = {}
    for currency in doc.find('table', class_="tablesorter ratesTable").find('tbody').find_all('tr'):
        tds = list(currency.find_all('td'))
        rates[tds[0].text.strip()] = [float(tds[1].find('a').text.strip()), float(tds[2].find('a').text.strip())]
    del rates['Venezuelan Bolivar']
    return rates

@app.route('/api/fetch-currencies')
def fetch():
    return getCurrencyTable()
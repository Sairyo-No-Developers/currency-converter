import requests
from bs4 import BeautifulSoup as bs4
import pytest
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
import os


CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000","https://mif.sairyonodevs.in"]}})



def getCurrencyTable():
    url = "https://www.x-rates.com/table/?from=INR&amount=1"
    doc = bs4(requests.get(url).content, 'html.parser')
    rates = {}
    for currency in doc.find('table', class_="tablesorter ratesTable").find('tbody').find_all('tr'):
        tds = list(currency.find_all('td'))
        rates[tds[0].text.strip()] = [float(tds[1].find('a').text.strip()), float(tds[2].find('a').text.strip())]
    del rates['Venezuelan Bolivar']
    return rates

@app.route('/')
def home():
    return 'API For Fetching Currency Rates. Use route /api/fetch-currencies'

@app.route('/api/fetch-currencies')
def fetch():
    return getCurrencyTable()

def test_empty_db(client):
    """Start with a blank database."""

    rv = client.get('/')
    assert b'Currency Exchange API For Fetching Currency Rates. Use route /api/fetch-currencies' in rv.data

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=os.getenv('PORT', 6002))
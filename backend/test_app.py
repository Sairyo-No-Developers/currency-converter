import pytest
from app import app
import json

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


def test_home(client):
    """Start with a blank database."""

    rv = client.get('/')
    print("Test Running")
    assert b'Currency Exchange API For Fetching Currency Rates. Use route /api/fetch-currencies' in rv.data
    
def test_currencies(client):
    data = client.get('/api/fetch-currencies').data
    data = json.loads(data)
    assert type(data['US Dollar'][0]) == float
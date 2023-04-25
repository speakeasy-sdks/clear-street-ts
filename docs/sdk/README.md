# SDK

## Overview

This is a beta version of Clear Street's public API. This API is RESTful; it has resource-oriented URLs, returns JSON-encoded responses, and uses standard HTTP codes, authentication, and verbs.

# Environments
Clear Street operates two environments: sandbox and production. Each environment is completely isolated from the other. No data is ever shared. All activity in our sandbox environment has no actual impact; all accounts in our sandbox use canned data. We recommend testing in our sandbox environment first before moving to production.

The following are the base URLs for each environment. Each endpoint in this API must be prefixed with one of the following base URLs:

Sandbox base URL: `https://api.sandbox.clearstreet.io/v1`

Production base URL: `https://api.clearstreet.io/v1`

# Authentication
End-to-end security is provided through an SSL connection and an API-key that will be provided to users of our API.

The API-key provided to you will take the form a bearer token. Every request you make, therefore, must contain your API-key in the header of the request in the following form:


Authorization: Bearer <KEY>


Where `` is the API-key provided to you.

Here's an example of constructing a request in Python:

```python
import requests

# change URL based on environment
URL = "https://api.sandbox.clearstreet.io/v1/trades"

# set provided API-key here
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXQiOjE1ODU2MTk2NDYsImV4cCI6MTU4NTYyMzI0NiwidWlkIjoyfQ.B6wdfKRro9JxPrhjn8QchPOfGFSWexfg_2EX0V_tkdA'
}

# construct your message
payload = [{
    "type": "allocation_trade",
    "timestamp": 1556544618,
    "client_trade_id": "042919-1a",
    "date": 20190304,
    "account_id": 100016,
    "mic": "XNAS",
    "exec_mpid": "CSMM",
    "capacity": "principal",
    "quantity": "100",
    "price": "140.00",
    "instrument": {
        "identifier": "ATRA",
        "identifier_type": "ticker",
        "currency": "USD",
        "country": "USA"
    },
    "side": {
        "direction": "buy"
    },
    "target_account_id": 100021
}]

# send request
requests.post(url=URL, headers=headers, json=payload) ```


### Available Operations


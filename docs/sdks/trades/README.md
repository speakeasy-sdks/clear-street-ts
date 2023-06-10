# trades

## Overview

Trade endpoints are used to insert or cancel trades into a our systems.


### Available Operations

* [cancel](#cancel) - Cancel Trade By ID
* [create](#create) - Insert Trades

## cancel

Cancel a trade either by the Clear Street assigned `trade_id`, or `client_trade_id` that was provided in the original trade. If the ID you provide is, in fact, a `client_trade_id`, you must set `is_client_trade_id` to true, and also provide the `account_id` for the original trade.


### Example Usage

```typescript
import { ClearStreet } from "clearStreet";
import { CancelTradesResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorType } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.trades.cancel({
  accountId: 715190,
  isClientTradeId: false,
  tradeId: "quibusdam",
}).then((res: CancelTradesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CancelTradesRequest](../../models/operations/canceltradesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CancelTradesResponse](../../models/operations/canceltradesresponse.md)>**


## create

Insert the provided trades atomically. Use this endpoint if you want atomicity and immediate confirmation; this request will either fully process all your trades, or reject them all atomically. Therefore, a successful call to this endpoint guarantees that your trades have been accepted by our systems. This endpoint can accept up to 1000 trades at a time. 
Exchange Trade  trades done directly on an
        exchange. An example would be a trading account buying shares on
        Nasdaq.

Bilateral Trade trades done bilaterally broker
        to broker. An example would be Bank of America's trading account buying
        shares from Goldman Sachs' trading account.

Transfer
        Trade trades are done to transfer from one account to another within
        the same legal entity. An example would be to transfer shares from a
        trading account to an error account.

Allocation Trade
        trades are done to allocate to a customer account. An example would be
        to allocate shares at an average price from an average price account to
        a customer account. 

The fields below vary depending upon trade-type. Change the value of the `type` drop-down below to switch between trade-types.


### Example Usage

```typescript
import { ClearStreet } from "clearStreet";
import { CreateTradesResponse } from "clearStreet/dist/sdk/models/operations";
import {
  ErrorType,
  InstrumentIdentifierType,
  SideDirection,
  SidePosition,
  SideQualifier,
  TradeType,
} from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.trades.create([
  {
    accountId: 1002,
    behalfOfAccountId: 1002,
    behalfOfEntityId: 1002,
    branchOffice: "nulla",
    cancelTradeId: "corrupti",
    clientTradeId: "T-50264430-bc41",
    date: 20200101,
    instrument: {
      country: "USA",
      currency: "USD",
      identifier: "AAPL",
      identifierType: InstrumentIdentifierType.Sedol,
    },
    orderId: "vel",
    price: "10.00",
    quantity: "100",
    registeredRep: "error",
    settlement: {
      currency: "USD",
      date: 645894,
    },
    side: {
      direction: SideDirection.Sell,
      position: SidePosition.Close,
      qualifier: SideQualifier.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeType.AllocationTrade,
    userData: {},
  },
  {
    accountId: 1002,
    behalfOfAccountId: 1002,
    behalfOfEntityId: 1002,
    branchOffice: "magnam",
    cancelTradeId: "debitis",
    clientTradeId: "T-50264430-bc41",
    date: 20200101,
    instrument: {
      country: "USA",
      currency: "USD",
      identifier: "AAPL",
      identifierType: InstrumentIdentifierType.Ticker,
    },
    orderId: "delectus",
    price: "10.00",
    quantity: "100",
    registeredRep: "tempora",
    settlement: {
      currency: "USD",
      date: 383441,
    },
    side: {
      direction: SideDirection.Sell,
      position: SidePosition.Close,
      qualifier: SideQualifier.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeType.BilateralTrade,
    userData: {},
  },
  {
    accountId: 1002,
    behalfOfAccountId: 1002,
    behalfOfEntityId: 1002,
    branchOffice: "placeat",
    cancelTradeId: "voluptatum",
    clientTradeId: "T-50264430-bc41",
    date: 20200101,
    instrument: {
      country: "USA",
      currency: "USD",
      identifier: "AAPL",
      identifierType: InstrumentIdentifierType.Cusip,
    },
    orderId: "excepturi",
    price: "10.00",
    quantity: "100",
    registeredRep: "nisi",
    settlement: {
      currency: "USD",
      date: 925597,
    },
    side: {
      direction: SideDirection.Sell,
      position: SidePosition.LessThanNilGreaterThan,
      qualifier: SideQualifier.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeType.TransferTrade,
    userData: {},
  },
]).then((res: CreateTradesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Trade[]](../../models//.md)                          | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTradesResponse](../../models/operations/createtradesresponse.md)>**


# trades

## Overview

Trade endpoints are used to insert or cancel trades into a our systems.


### Available Operations

* [cancelTrades](#canceltrades) - Cancel Trade By ID
* [createTrades](#createtrades) - Insert Trades

## cancelTrades

Cancel a trade either by the Clear Street assigned `trade_id`, or `client_trade_id` that was provided in the original trade. If the ID you provide is, in fact, a `client_trade_id`, you must set `is_client_trade_id` to true, and also provide the `account_id` for the original trade.


### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { CancelTradesRequest, CancelTradesResponse } from "clear-street/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: CancelTradesRequest = {
  accountId: 715190,
  isClientTradeId: false,
  tradeId: "quibusdam",
};

sdk.trades.cancelTrades(req).then((res: CancelTradesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createTrades

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
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { , CreateTradesResponse } from "clear-street/dist/sdk/models/operations";
import {
  ErrorTypeEnum,
  InstrumentIdentifierTypeEnum,
  SideDirectionEnum,
  SidePositionEnum,
  SideQualifierEnum,
  TradeTypeEnum,
} from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: . = [
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
      identifierType: InstrumentIdentifierTypeEnum.Sedol,
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
      direction: SideDirectionEnum.Sell,
      position: SidePositionEnum.Close,
      qualifier: SideQualifierEnum.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeTypeEnum.AllocationTrade,
    userData: {
      "debitis": "ipsa",
      "delectus": "tempora",
    },
  },
  {
    accountId: 1002,
    behalfOfAccountId: 1002,
    behalfOfEntityId: 1002,
    branchOffice: "suscipit",
    cancelTradeId: "molestiae",
    clientTradeId: "T-50264430-bc41",
    date: 20200101,
    instrument: {
      country: "USA",
      currency: "USD",
      identifier: "AAPL",
      identifierType: InstrumentIdentifierTypeEnum.Sedol,
    },
    orderId: "placeat",
    price: "10.00",
    quantity: "100",
    registeredRep: "voluptatum",
    settlement: {
      currency: "USD",
      date: 479977,
    },
    side: {
      direction: SideDirectionEnum.Sell,
      position: SidePositionEnum.Close,
      qualifier: SideQualifierEnum.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeTypeEnum.AllocationTrade,
    userData: {
      "temporibus": "ab",
      "quis": "veritatis",
      "deserunt": "perferendis",
      "ipsam": "repellendus",
    },
  },
  {
    accountId: 1002,
    behalfOfAccountId: 1002,
    behalfOfEntityId: 1002,
    branchOffice: "sapiente",
    cancelTradeId: "quo",
    clientTradeId: "T-50264430-bc41",
    date: 20200101,
    instrument: {
      country: "USA",
      currency: "USD",
      identifier: "AAPL",
      identifierType: InstrumentIdentifierTypeEnum.Ticker,
    },
    orderId: "at",
    price: "10.00",
    quantity: "100",
    registeredRep: "at",
    settlement: {
      currency: "USD",
      date: 978619,
    },
    side: {
      direction: SideDirectionEnum.Sell,
      position: SidePositionEnum.Close,
      qualifier: SideQualifierEnum.Short,
    },
    solicited: false,
    timestamp: 1545952392000,
    type: TradeTypeEnum.BilateralTrade,
    userData: {
      "esse": "totam",
      "porro": "dolorum",
      "dicta": "nam",
      "officia": "occaecati",
    },
  },
];

sdk.trades.createTrades(req).then((res: CreateTradesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

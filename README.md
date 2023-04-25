# clear-street

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/clear-street-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/clear-street-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { CancelTradesRequest, CancelTradesResponse } from "clear-street/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: CancelTradesRequest = {
  accountId: 548814,
  isClientTradeId: false,
  tradeId: "provident",
};

sdk.trades.cancelTrades(req).then((res: CancelTradesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [trades](docs/trades/README.md)

* [cancelTrades](docs/trades/README.md#canceltrades) - Cancel Trade By ID
* [createTrades](docs/trades/README.md#createtrades) - Insert Trades

### [uploads](docs/uploads/README.md)

* [cancelUploads](docs/uploads/README.md#canceluploads) - Create_Uploads
* [getByIdUploads](docs/uploads/README.md#getbyiduploads) - Get Upload By ID
* [uploadsInsertCreate](docs/uploads/README.md#uploadsinsertcreate) - Create Insert Upload
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


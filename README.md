<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/234535064-98a79087-c3b4-4cca-a358-06d8c4720079.svg" width="350px">
    <h1>Typescript SDK</h1>
   <p>Financial infrastructure for today's institutions.</p>
   <a href="https://clear-street.github.io/docs/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/smartcar-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/clear-street-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/clear-street-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/clear-street-ts?sort=semver&style=for-the-badge" /></a>
</div>


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
import { ClearStreet } from "clearStreet";
import { CancelTradesRequest, CancelTradesResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

const req: CancelTradesRequest = {
  accountId: 548814,
  isClientTradeId: false,
  tradeId: "provident",
};

sdk.trades.cancel(req).then((res: CancelTradesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [trades](docs/trades/README.md)

* [cancel](docs/trades/README.md#cancel) - Cancel Trade By ID
* [create](docs/trades/README.md#create) - Insert Trades

### [uploads](docs/uploads/README.md)

* [cancel](docs/uploads/README.md#cancel) - Create_Uploads
* [create](docs/uploads/README.md#create) - Create Insert Upload
* [getById](docs/uploads/README.md#getbyid) - Get Upload By ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


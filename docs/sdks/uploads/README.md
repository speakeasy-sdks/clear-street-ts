# uploads

## Overview

Upload endpoints allow you to upload a `CSV` file that contain trades, in the same format as our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md). You may prefer to use a file-upload if you have a extremely large number of trades (> 10000), or if you have dependency on legacy systems that deal with `CSV` files. We recommend using trade endpoints when possible, especially for real-time trade reporting.


### Available Operations

* [cancel](#cancel) - Create_Uploads
* [create](#create) - Create Insert Upload
* [getById](#getbyid) - Get Upload By ID

## cancel

Upload the provided CSV file for processing cancels asynchronously.

Example column headers with associated example values:

  account	100001
  trade_id	12343
  by_client_id	false


### Example Usage

```typescript
import { ClearStreet } from "clearStreet";
import { CancelUploadsResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorType } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.uploads.cancel({
  file: {
    content: "quis".encode(),
    file: "veritatis",
  },
}).then((res: CancelUploadsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CancelUploadsRequestBody](../../models/operations/canceluploadsrequestbody.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CancelUploadsResponse](../../models/operations/canceluploadsresponse.md)>**


## create

Upload the provided CSV file for processing asynchronously. Your file will be uploaded to our servers, and then subsequently processed.

The columns for a CSV file should match the JSON path dot-notation of the fields available in the insert trades endpoint. For example, the column `side.direction` would be the column header to set the direction of a trade, and the column `instrument.ticker` would set the trade's instrument ticker, etc.

Our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md) has more details. You can also download an example file.


### Example Usage

```typescript
import { ClearStreet } from "clearStreet";
import { UploadsInsertCreateResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorType } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.uploads.create({
  file: {
    content: "deserunt".encode(),
    file: "perferendis",
  },
}).then((res: UploadsInsertCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UploadsInsertCreateRequestBody](../../models/operations/uploadsinsertcreaterequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadsInsertCreateResponse](../../models/operations/uploadsinsertcreateresponse.md)>**


## getById

Get an existing upload. Use this endpoint when you want to the know the status of a previously created upload.


### Example Usage

```typescript
import { ClearStreet } from "clearStreet";
import { GetByIdResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorType } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.uploads.getById({
  uploadId: "ipsam",
}).then((res: GetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetByIdRequest](../../models/operations/getbyidrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetByIdResponse](../../models/operations/getbyidresponse.md)>**


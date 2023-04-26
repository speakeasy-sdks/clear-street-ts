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
import { AxiosError } from "axios";
import { ClearStreet } from "clearStreet";
import { CancelUploadsRequestBody, CancelUploadsResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

const req: CancelUploadsRequestBody = {
  file: {
    content: "fugit".encode(),
    file: "deleniti",
  },
};

sdk.uploads.cancel(req).then((res: CancelUploadsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## create

Upload the provided CSV file for processing asynchronously. Your file will be uploaded to our servers, and then subsequently processed.

The columns for a CSV file should match the JSON path dot-notation of the fields available in the insert trades endpoint. For example, the column `side.direction` would be the column header to set the direction of a trade, and the column `instrument.ticker` would set the trade's instrument ticker, etc.

Our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md) has more details. You can also download an example file.


### Example Usage

```typescript
import { AxiosError } from "axios";
import { ClearStreet } from "clearStreet";
import { UploadsInsertCreateRequestBody, UploadsInsertCreateResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

const req: UploadsInsertCreateRequestBody = {
  file: {
    content: "hic".encode(),
    file: "optio",
  },
};

sdk.uploads.create(req).then((res: UploadsInsertCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getById

Get an existing upload. Use this endpoint when you want to the know the status of a previously created upload.


### Example Usage

```typescript
import { AxiosError } from "axios";
import { ClearStreet } from "clearStreet";
import { GetByIdRequest, GetByIdResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

const req: GetByIdRequest = {
  uploadId: "totam",
};

sdk.uploads.getById(req).then((res: GetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

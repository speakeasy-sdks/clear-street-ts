# uploads

## Overview

Upload endpoints allow you to upload a `CSV` file that contain trades, in the same format as our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md). You may prefer to use a file-upload if you have a extremely large number of trades (> 10000), or if you have dependency on legacy systems that deal with `CSV` files. We recommend using trade endpoints when possible, especially for real-time trade reporting.


### Available Operations

* [cancelUploads](#canceluploads) - Create_Uploads
* [getByIdUploads](#getbyiduploads) - Get Upload By ID
* [uploadsInsertCreate](#uploadsinsertcreate) - Create Insert Upload

## cancelUploads

Upload the provided CSV file for processing cancels asynchronously.

Example column headers with associated example values:

  account	100001
  trade_id	12343
  by_client_id	false


### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { CancelUploadsRequestBody, CancelUploadsResponse } from "clear-street/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: CancelUploadsRequestBody = {
  file: {
    content: "fugit".encode(),
    file: "deleniti",
  },
};

sdk.uploads.cancelUploads(req).then((res: CancelUploadsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getByIdUploads

Get an existing upload. Use this endpoint when you want to the know the status of a previously created upload.


### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { GetByIdUploadsRequest, GetByIdUploadsResponse } from "clear-street/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: GetByIdUploadsRequest = {
  uploadId: "hic",
};

sdk.uploads.getByIdUploads(req).then((res: GetByIdUploadsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadsInsertCreate

Upload the provided CSV file for processing asynchronously. Your file will be uploaded to our servers, and then subsequently processed.

The columns for a CSV file should match the JSON path dot-notation of the fields available in the insert trades endpoint. For example, the column `side.direction` would be the column header to set the direction of a trade, and the column `instrument.ticker` would set the trade's instrument ticker, etc.

Our [trade-file specification](https://github.com/clear-street/docs/blob/master/trade_file.md) has more details. You can also download an example file.


### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "clear-street";
import { UploadsInsertCreateRequestBody, UploadsInsertCreateResponse } from "clear-street/dist/sdk/models/operations";
import { ErrorTypeEnum } from "clear-street/dist/sdk/models/shared";

const sdk = new SDK();

const req: UploadsInsertCreateRequestBody = {
  file: {
    content: "optio".encode(),
    file: "totam",
  },
};

sdk.uploads.uploadsInsertCreate(req).then((res: UploadsInsertCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
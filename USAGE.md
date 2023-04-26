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
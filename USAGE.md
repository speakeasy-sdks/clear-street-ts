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
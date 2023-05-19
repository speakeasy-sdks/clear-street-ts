<!-- Start SDK Example Usage -->
```typescript
import { ClearStreet } from "clearStreet";
import { CancelTradesResponse } from "clearStreet/dist/sdk/models/operations";
import { ErrorType } from "clearStreet/dist/sdk/models/shared";

const sdk = new ClearStreet();

sdk.trades.cancel({
  accountId: 548814,
  isClientTradeId: false,
  tradeId: "provident",
}).then((res: CancelTradesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->
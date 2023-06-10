# CreateTradesResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `error`                                                          | [shared.ErrorT](../../models/shared/errort.md)                   | :heavy_minus_sign:                                               | Bad Request                                                      |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rawResponse`                                                    | [AxiosResponse>](https://axios-http.com/docs/res_schema)         | :heavy_minus_sign:                                               | N/A                                                              |
| `tradeSubmitteds`                                                | [shared.TradeSubmitted](../../models/shared/tradesubmitted.md)[] | :heavy_minus_sign:                                               | OK                                                               |
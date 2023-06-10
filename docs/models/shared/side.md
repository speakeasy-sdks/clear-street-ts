# Side

Trade direction, either buy or sell with qualifiers


## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `direction`                                           | [SideDirection](../../models/shared/sidedirection.md) | :heavy_check_mark:                                    | Trade direction                                       | sell                                                  |
| `position`                                            | [SidePosition](../../models/shared/sideposition.md)   | :heavy_minus_sign:                                    | Trade position, if any                                |                                                       |
| `qualifier`                                           | [SideQualifier](../../models/shared/sidequalifier.md) | :heavy_minus_sign:                                    | Trade qualifier, if any                               |                                                       |
# fmrl-voucher



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                                      | Default     |
| ----------- | ----------- | ----------- | --------------------------------------------------------- | ----------- |
| `amount`    | `amount`    |             | `string`                                                  | `undefined` |
| `code`      | `code`      |             | `string`                                                  | `undefined` |
| `encrypted` | `encrypted` |             | `boolean`                                                 | `undefined` |
| `hint`      | `hint`      |             | `string`                                                  | `undefined` |
| `link`      | `link`      |             | `string`                                                  | `undefined` |
| `target`    | `target`    |             | `string`                                                  | `'_self'`   |
| `type`      | `type`      |             | `"amazon" \| "apple" \| "bod" \| "other" \| "tremendous"` | `undefined` |


## Dependencies

### Depends on

- ion-button
- [fmrl-scramble-text](../fmrl-scramble-text)
- ion-card-title
- ion-card-subtitle
- ion-card
- ion-card-header
- ion-card-content
- ion-item
- ion-icon
- [fmrl-redeem-instructions-tremendous](../fmrl-redeem-instructions-tremendous)
- [fmrl-redeem-instructions-amazon](../fmrl-redeem-instructions-amazon)
- [fmrl-redeem-instructions-apple](../fmrl-redeem-instructions-apple)
- [fmrl-redeem-bod](../fmrl-redeem-bod)

### Graph
```mermaid
graph TD;
  fmrl-voucher --> ion-button
  fmrl-voucher --> fmrl-scramble-text
  fmrl-voucher --> ion-card-title
  fmrl-voucher --> ion-card-subtitle
  fmrl-voucher --> ion-card
  fmrl-voucher --> ion-card-header
  fmrl-voucher --> ion-card-content
  fmrl-voucher --> ion-item
  fmrl-voucher --> ion-icon
  fmrl-voucher --> fmrl-redeem-instructions-tremendous
  fmrl-voucher --> fmrl-redeem-instructions-amazon
  fmrl-voucher --> fmrl-redeem-instructions-apple
  fmrl-voucher --> fmrl-redeem-bod
  ion-button --> ion-ripple-effect
  ion-card --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  style fmrl-voucher fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

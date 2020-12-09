import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fmrl-redeem-instructions-amazon',
  styleUrl: 'fmrl-redeem-instructions-amazon.css',
  shadow: true,
})
export class FmrlRedeemInstructionsAmazon {

  render() {
    return (
      <Host>
        <p>This is how to redeem your amazon voucher</p>
      </Host>
    );
  }

}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fmrl-voucher',
  styleUrl: 'fmrl-voucher.css',
  shadow: true,
})
export class FmrlVoucher {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

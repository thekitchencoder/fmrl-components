import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fmrl-redeem-instructions-tremendous',
  styleUrl: 'fmrl-redeem-instructions-tremendous.css',
  shadow: true,
})
export class FmrlRedeemInstructionsTremendous {

  render() {
    return (
      <Host>
        <ul>
          <li>Tremendous</li>
          <li>Redeem</li>
          <li>Instructions</li>
        </ul>
      </Host>
    );
  }

}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fmrl-redeem-bod',
  styleUrl: 'fmrl-redeem-bod.css',
  shadow: true,
})
export class FmrlRedeemBod {

  @Prop() tel: string;

  render() {
    return (
      <Host>
        <ul>
          <li>Click 'redeem'</li>
          <li>The voucher code will be copied into a SMS</li>
          <li>Send the SMS</li>
          <li>Await your money 🤑</li>
        </ul>
        <h5>If you need to redeem your code manually:</h5>
        <ul>
          <li>Tap the claim code to copy to the clipboard</li>
          <li>Send it as a text message to {this.tel}</li>
          <li>Await your money 🤑</li>
        </ul>
        <hr/>
        <h5>NOTE: If your code has been encrypted you will need to enter the key to decrypt the code first</h5>
      </Host>
    );
  }

}

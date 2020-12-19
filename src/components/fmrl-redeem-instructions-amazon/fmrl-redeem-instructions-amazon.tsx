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
        <ul>
          <li>Click 'redeem'</li>
          <li>The voucher code will be copied to the clipboard and your browser will navigate to <a href='www.amazon.co.uk/redeem'>www.amazon.co.uk/redeem</a></li>
          <li>Paste the voucher code into the field and click apply</li>
        </ul>
        <h5>If you need to redeem your code manually:</h5>
        <ul>
          <li>Make a note of the claim code.</li>
          <li>Go to <a href='www.amazon.co.uk/redeem'>www.amazon.co.uk/redeem</a>. You may be asked to sign in to your account again.</li>
          <li>Enter your claim code and click Apply to Your Balance.</li>
        </ul>
        <hr/>
        <h5>NOTE: If your code has been encrypted you will need to enter the key to decrypt the voucher first</h5>
      </Host>
    );
  }

}

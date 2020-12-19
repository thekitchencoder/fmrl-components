import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fmrl-redeem-instructions-apple',
  styleUrl: 'fmrl-redeem-instructions-apple.css',
  shadow: true,
})
export class FmrlRedeemInstructionsApple {

  render() {
    return (
    <Host>
      <ul>
          <li>Click 'redeem'</li>
          <li>The app store will open with the voucher code automatically filled in</li>
          <li>Follow the on screen instructions</li>
        </ul>
        <h5>If you need to redeem your code manually:</h5>
        <ul>
          <li>Click the code to copy to the clipboard</li>
          <li>Open the App Store app.</li>
          <li>At the bottom of the screen, tap Today.</li>
          <li>At the top of the screen, tap the sign in button  or your photo.</li>
          <li>Tap 'Redeem Gift Card or Code'. If you can’t see 'Redeem Gift Card or Code', sign in with your Apple ID.</li>
          <li>Tap ‘You can also enter your code manually’, then paste in your code and follow the instructions on the screen.</li>
        </ul>
        <hr/>
        <h5>NOTE: If your code has been encrypted you will need to enter the key to decrypt the voucher first</h5>
    </Host>
    );
  }

}

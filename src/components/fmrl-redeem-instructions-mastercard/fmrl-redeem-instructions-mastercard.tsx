import { Component, h } from '@stencil/core';

@Component({
  tag: 'fmrl-redeem-instructions-mastercard',
  styleUrl: 'fmrl-redeem-instructions-mastercard.css',
  shadow: true,
})
export class FmrlRedeemInstructionsMastercard {

  render() {
    return (<ul>
      <li>Go to <a href="https://www.prepaiddigitalsolutions.com/" rel="noreferrer">https://www.prepaiddigitalsolutions.com/</a></li>
      <li>Enter the code you received from us.</li>
      <li>Click “Continue”</li>
      <li>Choose "Add new card" and enter your personal details like email, name and address to finalize your virtual MasterCard. This is necessary, because some online shops require this information with the use of a prepaid credit card.</li>
      <li>You can use your Virtual MasterCard immediately for your online purchases. Log into your online wallet anytime to see your card details, transaction history, and remaining balance of your Virtual MasterCard.</li>
    </ul>);
  }

}

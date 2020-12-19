import { Component, h, Prop, getAssetPath, State, Watch } from '@stencil/core';
import { alertController } from '@ionic/core';
import { CopyService } from '../../utils/copy-service';
import { OtpService } from '../../utils/otp-service'

@Component({
  tag: 'fmrl-voucher',
  styleUrl: 'fmrl-voucher.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class FmrlVoucher {

  private subtitle;
  private icon;
  private redeemLink;
  private instructionTag;
  private imageHeader;

  @State() token: string;


  @Prop() amount: string;
  @Prop() type: 'amazon' | 'apple' | 'tremendous' | 'other'
  @Prop() link: string;
  @Prop() hint: string;
  @Prop() target: string = '_self';
  @Prop({ mutable: true }) encrypted: boolean;
  @Prop({ mutable: true }) code: string;
  @Watch('code')
  parseLink() {
    switch (this.type) {
      case 'tremendous':
        this.redeemLink = `https://reward.testflight.tremendous.com/rewards/${this.code}`;
        break;
      case 'amazon':
        this.redeemLink = `https://www.amazon.co.uk/redeem/`;
        break;
      case 'apple':
        this.redeemLink = `https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/freeProductCodeWizard?certId=${this.code}`;
        break;
    }
  }

  // async presentToastWithOptions() {
  //   const toast = await toastController.create({
  //     header: 'Toast header',
  //     message: 'Click to Close',
  //     position: 'top',
  //     buttons: [
  //       {
  //         side: 'start',
  //         icon: 'star',
  //         text: 'Favorite',
  //         handler: async () => {
  //           console.log('Favorite clicked');
  //           await CopyService.copy(this.code)
  //         }
  //       }, {
  //         text: 'Done',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //           window.location.href = "https://www.prepaiddigitalsolutions.com/";
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }


  componentWillLoad() {
    this.parseType();
    this.parseLink();
  }

  async decrypt() {
    const alert = await alertController.create({
      header: 'Decrypt the code',
      inputs: [
        {
          name: 'key',
          placeholder: this.hint
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Decrypt',
          handler: data => {
            this.encrypted = false;
            this.code = OtpService.decrypt(this.code, data.key);
          }
        }
      ]
    });
    alert.present();

  }

  render() {

    let voucherCode;
    if (this.encrypted) {
      voucherCode = [
        <span>***-*****-****</span>, <ion-button fill="outline" slot="end" onClick={() => this.decrypt()}>Redeem</ion-button>
      ];
    } else {
      voucherCode = [
        <fmrl-scramble-text start-with="***-*****-****" text={this.code} onClick={() => CopyService.copy(this.code)}></fmrl-scramble-text>,
        <ion-button fill="outline" slot="end" onClick={async () => await this.redeemVoucher()}>Redeem</ion-button>
      ];
    }

    const title = this.amount && <ion-card-title>{this.amount}</ion-card-title>;
    const subtitle = this.subtitle && <ion-card-subtitle>{this.subtitle}</ion-card-subtitle>;

    return (
      <ion-card>
        <ion-card-header>
          {this.imageHeader}
          {subtitle}
          {title}
        </ion-card-header>


        <ion-card-content>
          <slot></slot>
          <ion-item>
            <ion-icon name={this.icon} slot="start"></ion-icon>
            {voucherCode}
          </ion-item>
          {this.instructionTag}
        </ion-card-content>
      </ion-card>
    );
  }

  redeemVoucher() {
    console.log(this.redeemLink);
    return CopyService.copy(this.code).then(() => window.open(this.redeemLink, this.target));
    
  }

  parseType() {
    let instructions;
    let image;
    switch (this.type) {
      case 'tremendous':
        //this.subtitle = 'Gift Card';
        this.icon = 'card-outline'
        image = 'tremendous.svg';
        instructions = <fmrl-redeem-instructions-tremendous></fmrl-redeem-instructions-tremendous>
        break;

      case 'amazon':
        this.subtitle = 'Amazon Voucher';
        this.icon = 'logo-amazon';
        image = 'amazon.svg';
        instructions = <fmrl-redeem-instructions-amazon></fmrl-redeem-instructions-amazon>
        break;

      case 'apple':
        this.subtitle = 'App Store & iTunes'
        this.icon = 'logo-apple';
        image = 'apple.svg';
        instructions = <fmrl-redeem-instructions-apple></fmrl-redeem-instructions-apple>;
        break;

      default:
        this.subtitle = 'Voucher';
        this.icon = 'cash-outline';
    }

    this.imageHeader = image ? <img src={getAssetPath(`./assets/${image}`)} /> : '';
    this.instructionTag = instructions && (
      <section>
        <details>
          <summary>How do I redeem my gift?</summary>
          <ul>
            {instructions}
          </ul>
        </details>
      </section>);

  }


}

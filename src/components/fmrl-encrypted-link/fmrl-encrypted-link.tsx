import { Component, Host, h, Prop } from '@stencil/core';
import { alertController } from '@ionic/core';
import { OtpService } from '../../utils/otp-service'

@Component({
  tag: 'fmrl-encrypted-link',
  styleUrl: 'fmrl-encrypted-link.css',
  shadow: true,
})
export class FmrlEncryptedLink {

  @Prop() base: string;
  @Prop() hint: string;
  @Prop() help: string;
  @Prop() target: string = '_self';
  @Prop() href: string;

  async decrypt() {
    const alert = await alertController.create({
      header: 'fmrl encrypted link',
      subHeader: 'You need the key to open it.',
      // message: this.hint && `Your hint is:<br/> ${this.hint}`,
      message: (this.help ?? '') + (this.hint ? `<strong>Your hint is:</strong><br/> <em>${this.hint}</em>` : ''),

      inputs: [
        {
          name: 'key',
          placeholder: 'Enter your key here'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Open',
          handler: data => {
            if (data && data.key) {

              const decrypted = OtpService.decrypt(this.href, data.key);

              window.open(`${this.base ?? ''}${decrypted}`, this.target);
            }
          }
        }
      ]
    });
    alert.present();

  }

  render() {

    return (
      <Host>
        <a onClick={async () => this.decrypt()}>
          <slot></slot>
        </a>
      </Host>
    );
  }

}

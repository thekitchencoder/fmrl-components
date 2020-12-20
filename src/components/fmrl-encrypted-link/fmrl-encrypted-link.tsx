import { Component, Host, h, Prop } from '@stencil/core';
import { alertController, toastController } from '@ionic/core';
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
      message: (this.help ?? '') + (this.hint ? `<br/><strong>Your hint is:</strong><br/> <em>${this.hint}</em>` : ''),

      inputs: [
        {
          name: 'key',
          placeholder: 'Enter Key Here'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Open',
          handler: async data => {
            if (data && data.key) {
              await this.decryptLink(data.key);
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

  private async decryptLink(key: string) {
    try {
      const decrypted = OtpService.decrypt(this.href, key);
      const url = `${this.base ?? ''}${decrypted}`;
      // todo - bit oif a hack need to check has decoded to a valid URL (but not a relative one)
      if (this.base || url.startsWith('http')) {
        window.open(url, this.target);
      } else {
        await this.invalidKey();
      }
    } catch (e) {
      console.log(e);
      await this.invalidKey();
    }
  }

  private async invalidKey() {
    const toast = await toastController.create({
      header: 'Sorry',
      message: `That's not the correct key`,
      duration: 3000,
      color: 'dark'
    });
    toast.present();
  }

}

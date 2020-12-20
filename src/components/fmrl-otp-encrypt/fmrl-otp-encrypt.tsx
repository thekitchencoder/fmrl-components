import { Component, Host, h, State } from '@stencil/core';
import { OtpService } from '../../utils/otp-service';

@Component({
  tag: 'fmrl-otp-encrypt',
  styleUrl: 'fmrl-otp-encrypt.css',
  shadow: true,
})
export class FmrlOtpEncrypt {
  private plainLen: number;
  private keyLen: number;

  @State() plain: string;
  @State() cypher: string;
  @State() key: string;
  @State() outputCypher: string;
  @State() outputPlain: string;

  handlePlainChange(event: any) {
    this.plain = event.target.value;
    this.plainLen = encodeURIComponent(this.plain).length;
  }

  handleCypherChange(event: any) {
    this.cypher = event.target.value;
   
  }

  handleKeyChange(event: any) {
    this.key = event.target.value;
    this.keyLen = encodeURIComponent(this.key).length;
  }

  handleEncrypt() {
    this.outputCypher = OtpService.encrypt(this.plain, this.key);
  }

  handleDecrypt() {
    this.outputPlain = OtpService.decrypt(this.cypher, this.key);
  }

  render() {
    return (
      <Host>
        <input placeholder="plain" value={this.plain} onInput={(event) => this.handlePlainChange(event)}></input>
        <input placeholder="key" value={this.key} onInput={(event) => this.handleKeyChange(event)}></input>
        <button onClick={() => this.handleEncrypt()}>Encrypt</button> [{this.plainLen || 0}/{this.keyLen || 0}]
        <pre>{this.outputCypher}</pre>

        <input placeholder="cypher" value={this.cypher} onInput={(event) => this.handleCypherChange(event)}></input>
        <input placeholder="key" value={this.key} onInput={(event) => this.handleKeyChange(event)}></input>
        <button onClick={() => this.handleDecrypt()}>Decrypt</button>
        <pre>{this.outputPlain}</pre>
      </Host>
    );
  }

}

import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'fmrl-link-input',
  styleUrl: 'fmrl-link-input.css',
  shadow: true,
})
export class FmrlLinkInput {

  @State() value: string;

  @Prop() protocol: string = 'http';
  @Prop() target: string;
  @Prop() label: string;
  @Prop() base: string;
  @Prop() placeholder: string;
  @Prop() button: string = 'go';
  @Prop() transform: 'lower' | 'upper' | 'none' = 'none';

  @Prop({ attribute: 'default-value' }) defaultValue: string;

  componentWillLoad() {
    this.value = this.defaultValue;
  }



  render() {
    const button = this.value
      ? <div class="input-group-button {disabled}" onClick={() => this.openUrl()}>{this.button}</div>
      : <div class="input-group-button disabled" >{this.button}</div>

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="input-group">
          <div class="input-group-icon">{this.label ?? this.base}</div>
          <div class="input-group-area"><input type="text" placeholder={this.placeholder} value={this.value} onInput={(event) => this.handleChange(event)}></input></div>
          {button}
        </div>
      </form>
    );
  }

  private handleSubmit(e) {
    e.preventDefault()
    this.openUrl()
  }

  private handleChange(event) {
    this.value = event.target.value;
  }

  private openUrl() {
    const transformed = this.transform === 'lower'
      ? this.value.toLowerCase()
      : this.transform === 'upper' ? this.value.toUpperCase()
        : this.value;

    const url = `${this.protocol}://${this.base}${transformed}`;
  
    if (this.target) {
      window.open(url, this.target);
    } else {
      window.location.href = url;
    }
  }

}

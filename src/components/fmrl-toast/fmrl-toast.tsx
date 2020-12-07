import { Component, Host, h, Method } from '@stencil/core';

@Component({
  tag: 'fmrl-toast',
  styleUrl: 'fmrl-toast.css',
  shadow: true,
})
export class FmrlToast {

  @Method()
  

  render() {
    return (
      <Host>
        <slot></slot>
        {/* The actual snackbar */}
        <div id="snackbar">Some text some message..</div>
      </Host>
    );
  }

}

import { Component, Prop, h, Listen, State, Watch } from '@stencil/core';
import { decode } from '../../utils/decoder';

interface Message {
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string
}

@Component({
  tag: 'fmrl-scramble',
  styleUrl: 'fmrl-scramble.css',
  scoped: true,
})
export class Scramble {

  private messages: Message[];
  private count = 0;

  @State() index: number = 0;

  @Prop() data: string;
  @Watch("data")
  parseData() {
    if (this.data) {
      const input = this.data.startsWith('[{') ? this.data : decode(this.data);
      try {
        this.messages = JSON.parse(input);
      } catch (e) {
        console.log(e);
        this.messages = [{ text: "Invalid data" }];
      }
    }
  }

  @Prop({ attribute: 'data-src' }) dataSrc: string;
  @Watch("dataSrc")
  parseDataSrc() {

    if (this.dataSrc) {
      console.log(this.dataSrc);
      this.messages = window[this.dataSrc];
    }
  }

  @Prop() delay: number = 500;
  @Prop({ attribute: 'repeat' }) repeat: number = 0;

  @Listen("scrambleDone")
  async scrambleDoneEventListener() {
    const next = (this.index + 1) % this.messages.length

    if (next === 0) {
      this.count += 1;
    }

    if (this.repeat <= 0 || this.count < this.repeat) {

      window.setTimeout(() => {
        this.index = next;
      }, this.delay);
    }
  }

  componentWillLoad() {
    this.parseData();
    this.parseDataSrc();
  }

  render() {

    if (this.messages && this.messages.length > 0 && this.index < this.messages.length) {
      const message = this.messages[this.index];
      return <fmrl-scramble-text heading={message.heading} text={message.text}></fmrl-scramble-text>;
    }
  }

}

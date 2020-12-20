import { Component, h, Prop, Listen, State } from '@stencil/core';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);


@Component({
  tag: 'fmrl-countdown',
  styleUrl: 'fmrl-countdown.css',
  shadow: true,
})
export class FmrlCountdown {

  @State() message: string;

  @Prop() time: number;

  connectedCallback() {
    this.updateMessage();
    window.setInterval(() => {
      this.updateMessage();
    }, 1000);
  }

  render() {
    return <span>{this.message}</span>;
  }

  private updateMessage() {
    const now = dayjs();
    const other = dayjs(this.time);
    const duration = dayjs.duration(other.diff(now))
    this.message = duration.humanize(true);
  }


}

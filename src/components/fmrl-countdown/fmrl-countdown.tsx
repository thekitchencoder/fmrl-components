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

    // const pad = (val, padding) => (padding + val).slice(-2);
    // const ifNotZero = (val: number, suffix: string, padding = '0') => val ? pad(val, padding) + suffix : '';

    // const days = ifNotZero(Math.floor(duration.asDays()), 'd', '');
    // const hours = ifNotZero(Math.abs(duration.hours()), 'h');
    // const mins = ifNotZero(Math.abs(duration.minutes()), 'm');
    // const secs = ifNotZero(Math.abs(duration.seconds()), 's');
    // // not quirte rite as counts down from 60 seconds
    //this.message = `${days} ${hours} ${mins} ${secs}`;
    this.message = duration.humanize(true);
  }


}

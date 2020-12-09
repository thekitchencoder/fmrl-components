/* 
 Original work Copyright (c) 2020 by Justin Windle (https://codepen.io/soulwire/pen/mErPAK)
 Modified work Copyright 2020 Implexio Ltd (https://implex.io)

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

const chars = '!<>-_\\/[]{}—=+*^?#________';
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

interface Frame {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

@Component({
  tag: 'fmrl-scramble-text',
  styleUrl: 'fmrl-scramble-text.css',
  scoped: true,
})
export class ScrambleText {

  private frame: number = 0;
  private frameRequest: number;
  private queue: Frame[];

  @State() message: any[] = [];

  @Prop({attribute: 'start-with'}) startText: string
  @Prop() text: string;
  @Watch('text')
  handleTextChange(){
    this.start();
  }

  @Prop() heading: 1 | 2 | 3 | 4 | 5 | 6;

  @Event() scrambleDone: EventEmitter;

  connectedCallback() {
    window.setTimeout(() => {
      this.start();
    }, 100);
  }

  componentWillLoad() {
    if(this.startText) {
      this.message = [...this.startText];
    }
  }

  render() {
    let theTag: any;
    switch (this.heading) {
      case (1):
        theTag = <h1>{this.message}</h1>;
        break;
      case (2):
        theTag = <h2>{this.message}</h2>;
        break;
        case (3):
        theTag = <h3>{this.message}</h3>;
        break;
      case (4):
        theTag = <h4>{this.message}</h4>;
        break;
        case (5):
        theTag = <h5>{this.message}</h5>;
        break;
      case (6):
        theTag = <h6>{this.message}</h6>;
        break;
      default:
        theTag = <p>{this.message}</p>;
    }
    return theTag;
  }

  start() {
    const newText = this.text || '';
    const oldText = this.message || '';
    const length = Math.max(oldText.length, newText.length)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({
        from,
        to,
        start,
        end
      })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
  }

  private update() {
    let output = []
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output.push(to)
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar()
          this.queue[i].char = char
        }
        output.push( <span class="dud">{char}</span>)
      } else {
        output.push(from)
      }
    }
    this.message = output
    if (complete === this.queue.length) {
      this.scrambleDone.emit();
    } else {
      this.frameRequest = requestAnimationFrame(this.update.bind(this))
      this.frame++
    }
  }

}

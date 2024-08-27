import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-done-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7184 25.6825C64.1649 23.236 68.1458 23.236 70.5924 25.6825C73.0387 28.1289 73.0387 32.11 70.5924 34.5567L39.7558 65.3932C38.5703 66.5784 36.9946 67.231 35.3187 67.231C33.6428 67.231 32.0671 66.5786 30.8818 65.3934L17.794 52.3058C15.3475 49.8591 15.3475 45.8782 17.794 43.4317C20.2405 40.9852 24.2214 40.9852 26.668 43.4317L35.3187 52.082L61.7184 25.6825ZM37.2205 62.8576L68.0569 32.021C69.1054 30.9723 69.1054 29.2663 68.0571 28.2178C67.0085 27.1693 65.3024 27.1693 64.2537 28.2178L36.5866 55.8852C35.8863 56.5854 34.7514 56.5854 34.0509 55.8852L24.1327 45.967C23.6087 45.4428 22.9198 45.1805 22.2312 45.1805C21.5425 45.1805 20.8538 45.4426 20.3296 45.9668C19.2811 47.0153 19.2811 48.7213 20.3298 49.77L33.4174 62.8576C33.9253 63.3656 34.6006 63.6455 35.3189 63.6455C36.0371 63.6455 36.7124 63.3654 37.2205 62.8576Z" fill="currentColor"/>
      <path d="M81.2339 52.4062C80.2735 52.1615 79.2984 52.7414 79.0543 53.701C75.0895 69.2675 61.0861 80.1394 45 80.1394C44.01 80.1394 43.2072 80.942 43.2072 81.9322C43.2072 82.9223 44.01 83.725 45 83.725C62.727 83.725 78.1593 71.7426 82.5289 54.5859C82.7733 53.6266 82.1937 52.6505 81.2339 52.4062Z" fill="currentColor"/>
      <path d="M80.1395 45.0002C80.1395 44.01 80.9423 43.2074 81.9323 43.2074C82.9223 43.2074 83.7251 44.01 83.7251 45.0002C83.7251 45.5641 83.713 46.1329 83.6887 46.691C83.6471 47.6538 82.8534 48.4065 81.8989 48.4065C81.8727 48.4065 81.8465 48.4059 81.8202 48.4049C80.8309 48.3622 80.0636 47.5255 80.1065 46.5363C80.1284 46.0294 80.1395 45.5128 80.1395 45.0002Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M45 0C57.0201 0 68.3204 4.68071 76.8197 13.1801C85.3193 21.6796 90 32.9801 90 45C90 57.0199 85.3193 68.3204 76.8197 76.8199C68.3204 85.3193 57.0201 90 45 90C32.9799 90 21.6796 85.3193 13.1804 76.8199C4.68071 68.3204 0 57.0199 0 45C0 32.9801 4.68071 21.6796 13.1804 13.1801C21.6796 4.68071 32.9799 0 45 0ZM3.58559 45C3.58559 67.8361 22.1641 86.4144 45 86.4144C67.8359 86.4144 86.4144 67.8359 86.4144 45C86.4144 22.1641 67.8359 3.58559 45 3.58559C22.1641 3.58559 3.58559 22.1639 3.58559 45Z" fill="currentColor"/>
    </svg>
  `,
})
export class DoneIconComponent extends BaseIconComponent {
  constructor() {
    super('done-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}
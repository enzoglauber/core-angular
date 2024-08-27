import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-arrow-up-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21621 0.457102C7.8237 0.0543175 7.17635 0.0543186 6.78384 0.457104L1.06902 6.32155C0.690598 6.70988 0.6906 7.32905 1.06902 7.71738L1.33199 7.98723C1.7245 8.39002 2.37185 8.39002 2.76436 7.98723L6.78384 3.86251C7.17635 3.45972 7.8237 3.45972 8.21621 3.86251L12.2357 7.98723C12.6282 8.39002 13.2756 8.39002 13.6681 7.98723L13.931 7.71738C14.3095 7.32905 14.3095 6.70988 13.931 6.32155L8.21621 0.457102Z" fill="currentColor"/>
    </svg>
  `,
})
export class ArrowUpIconComponent extends BaseIconComponent {
  constructor() {
    super('arrow-up-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}

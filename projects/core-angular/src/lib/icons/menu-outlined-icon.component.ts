import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-menu-outlined-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947368 0C0.947368 0 0 0 0 1C0 2 0.947368 2 0.947368 2H1.89474H17C17 2 18 2 18 1C18 0 17 0 17 0H1.89474H0.947368Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947368 5C0.947368 5 0 5 0 6C0 7 0.947368 7 0.947368 7H1.89474H17C17 7 18 7 18 6C18 5 17 5 17 5H1.89474H0.947368Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947368 10C0.947368 10 0 10 0 11C0 12 0.947368 12 0.947368 12H1.89474H17C17 12 18 12 18 11C18 10 17 10 17 10H1.89474H0.947368Z" fill="currentColor"/>
    </svg>
  `,
})
export class MenuOutlinedIconComponent extends BaseIconComponent {
  constructor() {
    super('menu-outlined-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}

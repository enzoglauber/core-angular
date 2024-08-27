import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-close-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7.70711 4.89289C7.31658 5.28342 6.68342 5.28342 6.29289 4.89289L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L4.89289 6.29289C5.28342 6.68342 5.28342 7.31658 4.89289 7.70711L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L6.29289 9.10711C6.68342 8.71658 7.31658 8.71658 7.70711 9.10711L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L9.10711 7.70711C8.71658 7.31658 8.71658 6.68342 9.10711 6.29289L13.3 2.1Z" fill="currentColor"/>
    </svg>
  `,
})
export class CloseIconComponent extends BaseIconComponent {
  constructor() {
    super('close-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}

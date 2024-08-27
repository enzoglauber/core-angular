import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-calendar-check-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99173 0C5.57851 0 5.23416 0.344353 5.23416 0.757576V1.97429H3.76492C1.67585 1.99725 0 3.67309 0 5.73921V21.258C0 23.3241 1.67585 25 3.74196 25H21.258C23.3241 25 25 23.3241 25 21.258C25 20.8448 24.6556 20.5005 24.2424 20.5005C23.8292 20.5005 23.4848 20.8448 23.4848 21.258C23.4848 22.4747 22.4977 23.4848 21.258 23.4848H3.74196C2.52525 23.4848 1.51515 22.4977 1.51515 21.258V5.73921C1.51515 4.5225 2.5023 3.5124 3.74196 3.5124H5.2112V4.72911C5.2112 5.14233 5.55556 5.48668 5.96878 5.48668C6.382 5.48668 6.72635 5.14233 6.72635 4.72911V3.5124H11.6621V4.72911C11.6621 5.14233 12.0064 5.48668 12.4197 5.48668C12.8329 5.48668 13.1772 5.14233 13.1772 4.72911V3.5124H18.1589V4.72911C18.1589 5.14233 18.5032 5.48668 18.9164 5.48668C19.3297 5.48668 19.674 5.14233 19.674 4.72911V3.5124L21.258 3.54242C22.4747 3.54242 23.4848 4.52956 23.4848 5.76923V16.2764C23.4848 16.6896 23.8292 17.034 24.2424 17.034C24.6556 17.034 25 16.6896 25 16.2764V5.76923C25 3.70311 23.3242 2.02727 21.258 2.02727L19.7429 1.99724V0.757576C19.7429 0.344353 19.3985 0 18.9853 0C18.5721 0 18.2277 0.344353 18.2277 0.757576V1.97429H13.2231V0.757576C13.2231 0.344353 12.8788 0 12.4656 0C12.0523 0 11.708 0.344353 11.708 0.757576V1.97429H6.74931V0.757576C6.74931 0.344353 6.40496 0 5.99173 0Z" fill="currentColor"/>
      <path d="M6.56566 14.7612C6.56566 14.9679 6.65748 15.1515 6.79522 15.2893L9.96327 18.3425C10.4224 18.7787 11.0882 19.0312 11.7309 18.9853C12.3737 18.9394 12.9936 18.618 13.3838 18.1129L13.4068 18.067L18.3196 11.18C18.4343 11.0193 18.4803 10.8127 18.4573 10.6061C18.4343 10.3994 18.3196 10.2388 18.1589 10.101C17.8145 9.84848 17.3324 9.94031 17.0799 10.2847L12.213 17.1717C12.0064 17.4013 11.7769 17.4472 11.6391 17.4702C11.5243 17.4702 11.2718 17.4702 11.0422 17.2635L7.8742 14.1873C7.73645 14.0496 7.5528 13.9807 7.34619 13.9807C7.34619 13.9807 7.34619 13.9807 7.32323 13.9807C7.11662 13.9807 6.93297 14.0725 6.79522 14.2103C6.63453 14.371 6.56566 14.5546 6.56566 14.7612Z" fill="currentColor"/>
    </svg>
  `,
})
export class CalendarCheckIconComponent extends BaseIconComponent {
  constructor() {
    super('calendar-check-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}
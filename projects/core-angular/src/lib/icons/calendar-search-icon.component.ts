import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-calendar-search-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.92773 10.5254C10.2945 10.5254 10.5918 10.2281 10.5918 9.86133C10.5918 9.49458 10.2945 9.19727 9.92773 9.19727C9.56098 9.19727 9.26367 9.49458 9.26367 9.86133C9.26367 10.2281 9.56098 10.5254 9.92773 10.5254Z" fill="currentColor"/>
    <path d="M9.92773 7.63672C10.2945 7.63672 10.5918 7.33941 10.5918 6.97266C10.5918 6.6059 10.2945 6.30859 9.92773 6.30859C9.56098 6.30859 9.26367 6.6059 9.26367 6.97266C9.26367 7.33941 9.56098 7.63672 9.92773 7.63672Z" fill="currentColor"/>
    <path d="M7.03906 10.5254C7.40581 10.5254 7.70312 10.2281 7.70312 9.86133C7.70312 9.49458 7.40581 9.19727 7.03906 9.19727C6.67231 9.19727 6.375 9.49458 6.375 9.86133C6.375 10.2281 6.67231 10.5254 7.03906 10.5254Z" fill="currentColor"/>
    <path d="M7.03906 7.63672C7.40581 7.63672 7.70312 7.33941 7.70312 6.97266C7.70312 6.6059 7.40581 6.30859 7.03906 6.30859C6.67231 6.30859 6.375 6.6059 6.375 6.97266C6.375 7.33941 6.67231 7.63672 7.03906 7.63672Z" fill="currentColor"/>
    <path d="M7.03906 13.4141C7.40581 13.4141 7.70312 13.1168 7.70312 12.75C7.70312 12.3832 7.40581 12.0859 7.03906 12.0859C6.67231 12.0859 6.375 12.3832 6.375 12.75C6.375 13.1168 6.67231 13.4141 7.03906 13.4141Z" fill="currentColor"/>
    <path d="M12.8164 7.63672C13.1832 7.63672 13.4805 7.33941 13.4805 6.97266C13.4805 6.6059 13.1832 6.30859 12.8164 6.30859C12.4497 6.30859 12.1523 6.6059 12.1523 6.97266C12.1523 7.33941 12.4497 7.63672 12.8164 7.63672Z" fill="currentColor"/>
    <path d="M4.15039 7.63672C4.51714 7.63672 4.81445 7.33941 4.81445 6.97266C4.81445 6.6059 4.51714 6.30859 4.15039 6.30859C3.78364 6.30859 3.48633 6.6059 3.48633 6.97266C3.48633 7.33941 3.78364 7.63672 4.15039 7.63672Z" fill="currentColor"/>
    <path d="M14.0116 9.76172C12.3639 9.76172 11.0233 11.1023 11.0233 12.75C11.0233 13.308 11.1773 13.8308 11.4446 14.2782L9.85647 15.8664C9.59716 16.1257 9.59716 16.5461 9.85647 16.8055C9.98617 16.9352 10.1561 17 10.3261 17C10.496 17 10.666 16.9352 10.7956 16.8055L12.3612 15.2399C12.8345 15.5546 13.4019 15.7383 14.0116 15.7383C15.6594 15.7383 16.9999 14.3977 16.9999 12.75C16.9999 11.1023 15.6594 9.76172 14.0116 9.76172ZM14.0116 14.4102C13.0962 14.4102 12.3515 13.6654 12.3515 12.75C12.3515 11.8346 13.0962 11.0898 14.0116 11.0898C14.927 11.0898 15.6718 11.8346 15.6718 12.75C15.6718 13.6654 14.927 14.4102 14.0116 14.4102Z" fill="currentColor"/>
    <path d="M4.15039 13.4141C4.51714 13.4141 4.81445 13.1168 4.81445 12.75C4.81445 12.3832 4.51714 12.0859 4.15039 12.0859C3.78364 12.0859 3.48633 12.3832 3.48633 12.75C3.48633 13.1168 3.78364 13.4141 4.15039 13.4141Z" fill="currentColor"/>
    <path d="M14.3438 1.32812H13.4805V0.664062C13.4805 0.297301 13.1832 0 12.8164 0C12.4496 0 12.1523 0.297301 12.1523 0.664062V1.32812H9.13086V0.664062C9.13086 0.297301 8.83356 0 8.4668 0C8.10003 0 7.80273 0.297301 7.80273 0.664062V1.32812H4.81445V0.664062C4.81445 0.297301 4.51715 0 4.15039 0C3.78363 0 3.48633 0.297301 3.48633 0.664062V1.32812H2.65625C1.19159 1.32812 0 2.51972 0 3.98438V14.3438C0 15.8084 1.19159 17 2.65625 17H7.00586C7.37262 17 7.66992 16.7027 7.66992 16.3359C7.66992 15.9692 7.37262 15.6719 7.00586 15.6719H2.65625C1.92392 15.6719 1.32812 15.0761 1.32812 14.3438V3.98438C1.32812 3.25205 1.92392 2.65625 2.65625 2.65625H3.48633V3.32031C3.48633 3.68707 3.78363 3.98438 4.15039 3.98438C4.51715 3.98438 4.81445 3.68707 4.81445 3.32031V2.65625H7.80273V3.32031C7.80273 3.68707 8.10003 3.98438 8.4668 3.98438C8.83356 3.98438 9.13086 3.68707 9.13086 3.32031V2.65625H12.1523V3.32031C12.1523 3.68707 12.4496 3.98438 12.8164 3.98438C13.1832 3.98438 13.4805 3.68707 13.4805 3.32031V2.65625H14.3438C15.0761 2.65625 15.6719 3.25205 15.6719 3.98438V7.96875C15.6719 8.33551 15.9692 8.63281 16.3359 8.63281C16.7027 8.63281 17 8.33551 17 7.96875V3.98438C17 2.51972 15.8084 1.32812 14.3438 1.32812Z" fill="currentColor"/>
    <path d="M4.15039 10.5254C4.51714 10.5254 4.81445 10.2281 4.81445 9.86133C4.81445 9.49458 4.51714 9.19727 4.15039 9.19727C3.78364 9.19727 3.48633 9.49458 3.48633 9.86133C3.48633 10.2281 3.78364 10.5254 4.15039 10.5254Z" fill="currentColor"/>
    </svg>
  `,
})
export class CalendarSearchIconComponent extends BaseIconComponent {
  constructor() {
    super('calendar-search-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}
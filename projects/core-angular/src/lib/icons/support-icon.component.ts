import { Component, OnInit, Input } from '@angular/core';
import {BaseIconComponent} from "./base-icon.component";

@Component({
  selector: 'und-support-icon',
  template: `
    <svg [ngClass]="componentCssClasses" width="1em" height="1em" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83828 16.0263H6.41254V14.7862H5.83828C4.59406 14.7862 3.63696 13.7368 3.54125 12.4967V7.25C3.54125 3.91118 6.22112 1.14474 9.66667 1.14474C13.1122 1.14474 15.6964 3.81579 15.6964 7.25V12.4967C15.6964 13.7368 14.6436 14.6908 13.495 14.7862H12.9208V16.0263H13.495C15.4092 16.0263 16.9406 14.5 17.0363 12.4967V7.25C17.0363 3.24342 13.7822 0 9.66667 0C5.55115 0 2.39274 3.24342 2.39274 7.25V12.4967C2.39274 14.5 3.92409 16.0263 5.83828 16.0263Z" fill="currentColor"/>
      <path d="M4.7125 22.0362L3.54125 21.3684L3.15842 22.0362C2.10561 23.7533 2.20132 25.9474 3.34983 27.5691V29H4.59406V27.2829C4.59406 27.1875 4.56943 26.9934 4.49835 26.9013C3.54125 25.6612 3.44554 23.9441 4.30693 22.7039L4.7125 22.0362Z" fill="currentColor"/>
      <path d="M23.736 2.38487H20.099V3.625H23.736V2.38487Z" fill="currentColor"/>
      <path d="M26.6073 2.38487H24.4059V3.625H26.6073V2.38487Z" fill="currentColor"/>
      <path d="M26.6073 4.29276H20.099V5.53289H26.6073V4.29276Z" fill="currentColor"/>
      <path d="M23.736 6.20066H20.099V7.44079H23.736V6.20066Z" fill="currentColor"/>
      <path d="M26.4158 0H20.1947C18.7591 0 17.7063 1.14474 17.6106 2.48026V7.25C17.6106 8.68092 18.7591 9.73026 20.1947 9.73026H21.0561V11.5428C21.0561 11.8289 21.1753 12.0624 21.4389 12.1151C21.6715 12.1617 21.9435 12.0897 22.1089 11.9243L24.3102 9.73026H26.4158C27.8515 9.73026 28.9043 8.58553 29 7.25V2.48026C29 1.14474 27.8515 0 26.4158 0ZM21.6304 8.58553H20.1947C19.5248 8.58553 18.9505 8.01316 18.9505 7.25V2.48026C18.9505 1.8125 19.5248 1.14474 20.1947 1.14474H26.4158C27.0858 1.14474 27.6601 1.71711 27.6601 2.48026V7.25C27.7558 8.01316 27.1815 8.58553 26.4158 8.58553H24.0231C23.8317 8.58553 23.736 8.68092 23.5446 8.77632L22.2046 10.1118V9.15789C22.3003 8.87171 22.0132 8.58553 21.6304 8.58553Z" fill="currentColor"/>
      <path d="M15.8878 21.3684L14.835 22.0362L15.2178 22.7039C16.0792 24.0395 15.9835 25.7566 15.0264 26.9013C14.9307 26.9967 14.9307 27.1875 14.9307 27.2829V29H16.1749V27.5691C17.3234 25.9474 17.4191 23.7533 16.3663 22.0362L15.8878 21.3684Z" fill="currentColor"/>
      <path d="M28.33 16.2171H24.0231C22.1089 16.2171 20.6733 17.648 20.5776 19.5559L19.429 21.6546V20.2237C19.429 18.3158 17.8977 16.7895 15.8878 16.6941C14.8601 16.6941 13.9375 16.6941 12.9208 16.6941C12.4422 16.6941 12.0594 16.3125 12.0594 15.9309V14.8816C13.495 14.023 14.4521 12.4013 14.4521 10.6842V6.86842C14.4521 6.00987 14.2607 5.24671 13.8779 4.57895C13.6865 4.29276 13.3993 4.19737 13.1122 4.29276C13.1122 4.29276 5.16832 8.02179 4.9769 8.10855C4.78548 8.19531 4.78548 8.26953 4.78548 8.58553V10.6842C4.78548 12.4013 5.74257 14.023 7.17822 14.8816V15.9309C7.17822 16.4079 6.79538 16.6941 6.31683 16.6941H3.44554C1.53135 16.6941 0 18.2204 0 20.2237V29H1.24422V20.2237C1.24422 18.9836 2.29703 18.0296 3.54125 18.0296H4.9769L9.18812 23.8487C9.18812 23.8487 9.42878 24.1667 9.66667 24.1667C9.90456 24.1667 10.1452 23.8487 10.1452 23.8487L14.6436 17.9342H15.8878C17.132 17.9342 18.0891 18.9836 18.0891 20.1283V23.9441C18.0891 24.5355 19.0387 24.9131 19.3333 24.3257L21.5347 20.3191H23.9274L19.333 29H20.7687L25.363 20.3191H25.4587C27.3729 20.3191 28.9043 18.7928 29 16.7895C29 16.5033 28.7129 16.2171 28.33 16.2171ZM27.6601 17.4572C27.3729 18.4112 26.5116 19.0789 25.4587 19.0789H21.8218C22.1089 18.125 22.9703 17.4572 24.0231 17.4572H27.6601ZM11.0066 20.7961L9.76238 22.5132L8.51815 20.7961H11.0066ZM8.42244 15.8355V15.3586C9.28383 15.5493 10.1452 15.5493 11.0066 15.3586V15.8355C11.0066 16.9803 11.9637 17.9342 13.0165 17.9342H13.1122L11.868 19.5559H7.65677L6.50825 17.9342C7.56106 17.8388 8.42244 16.9803 8.42244 15.8355ZM9.66667 14.3092C7.65676 14.3092 5.93399 12.6875 5.93399 10.5888V8.9671L13.1122 5.62829C13.3036 6.00987 13.3993 6.39145 13.3993 6.77303V10.5888C13.3993 12.6875 11.7723 14.3092 9.66667 14.3092Z" fill="currentColor"/>
    </svg>
  `,
})
export class SupportIconComponent extends BaseIconComponent {
  constructor() {
    super('support-icon');
  }

  get componentCssClasses() {
    return {
      [`${this.appPrefix}`]: true,
      [`${this.cssPrefix}`]: true,
    }
  }
}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpinnerSizesEnum } from './enum/spinner-sizes.enum';
import {BaseComponent} from "../base.component";
import {SpinnerTypesEnum} from "./enum/spinner-types.enum";

@Component({
  selector: 'und-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent extends BaseComponent {
  @Input('size')
  spinnerSize: string = SpinnerSizesEnum.MEDIUM;

  @Input('type')
  spinnerType: string = SpinnerTypesEnum.SPIN;

  constructor() {
    super('spinner');
  }

  get spinnerClasses() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-small`]: this.spinnerSize === SpinnerSizesEnum.SMALL,
      [`${this.cssPrefix}--is-growing-circle`]: this.spinnerType === SpinnerTypesEnum.GROWING_CIRCLE,
    }
  }
}

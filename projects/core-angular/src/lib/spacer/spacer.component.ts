import { Component, OnInit, Input } from '@angular/core';
import { SpacerSidesEnum } from './enum/spacer-sides.enum';
import { SpacerSizesEnum } from './enum/spacer-sizes.enum';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-spacer',
  templateUrl: './spacer.component.html',
})
export class SpacerComponent extends BaseComponent {
  @Input('side')
  side = SpacerSidesEnum.BOTTOM;

  @Input('size')
  size = SpacerSizesEnum.MEDIUM;

  constructor() {
    super('spacer');
  }

  get availableSizes() {
    return SpacerSizesEnum;
  }

  get availableSides() {
    return SpacerSidesEnum;
  }

  get spacerClasses() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.appPrefix}-margin-top-xl`]: this.side == SpacerSidesEnum.TOP
                                              && this.size == SpacerSizesEnum.EXTRA_LARGE,
      [`${this.appPrefix}-margin-top-lg`]: this.side == SpacerSidesEnum.TOP
                                              && this.size == SpacerSizesEnum.LARGE,
      [`${this.appPrefix}-margin-top-md`]: this.side == SpacerSidesEnum.TOP
                                                && this.size == SpacerSizesEnum.MEDIUM,
      [`${this.appPrefix}-margin-top-sm`]: this.side == SpacerSidesEnum.TOP
                                                && this.size == SpacerSizesEnum.SMALL,
      [`${this.appPrefix}-margin-right-xl`]: this.side == SpacerSidesEnum.RIGHT
                                                && this.size == SpacerSizesEnum.EXTRA_LARGE,
      [`${this.appPrefix}-margin-right-lg`]: this.side == SpacerSidesEnum.RIGHT
                                                && this.size == SpacerSizesEnum.LARGE,
      [`${this.appPrefix}-margin-right-md`]: this.side == SpacerSidesEnum.RIGHT
                                                && this.size == SpacerSizesEnum.MEDIUM,
      [`${this.appPrefix}-margin-right-sm`]: this.side == SpacerSidesEnum.RIGHT
                                                && this.size == SpacerSizesEnum.SMALL,
      [`${this.appPrefix}-margin-bottom-xl`]: this.side == SpacerSidesEnum.BOTTOM
                                                && this.size == SpacerSizesEnum.EXTRA_LARGE,
      [`${this.appPrefix}-margin-bottom-lg`]: this.side == SpacerSidesEnum.BOTTOM
                                                && this.size == SpacerSizesEnum.LARGE,
      [`${this.appPrefix}-margin-bottom-md`]: this.side == SpacerSidesEnum.BOTTOM
                                                && this.size == SpacerSizesEnum.MEDIUM,
      [`${this.appPrefix}-margin-bottom-sm`]: this.side == SpacerSidesEnum.BOTTOM
                                                && this.size == SpacerSizesEnum.SMALL,
      [`${this.appPrefix}-margin-left-xl`]: this.side == SpacerSidesEnum.LEFT
                                                && this.size == SpacerSizesEnum.EXTRA_LARGE,
      [`${this.appPrefix}-margin-left-lg`]: this.side == SpacerSidesEnum.LEFT
                                                && this.size == SpacerSizesEnum.LARGE,
      [`${this.appPrefix}-margin-left-md`]: this.side == SpacerSidesEnum.LEFT
                                                && this.size == SpacerSizesEnum.MEDIUM,
      [`${this.appPrefix}-margin-left-sm`]: this.side == SpacerSidesEnum.LEFT
                                                && this.size == SpacerSizesEnum.SMALL,
    }
  }

}

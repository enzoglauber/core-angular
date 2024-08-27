import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from "../base.component";
import {ParagraphSizesEnum} from "./enum/paragraph-sizes.enum";

@Component({
  selector: 'und-p',
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent extends BaseComponent {
  @Input('size')
  size = ParagraphSizesEnum.MEDIUM;

  @Input()
  hasNoMargin = false;

  constructor() {
    super('paragraph');
  }

  get rootStyleClasses() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-medium`]: this.size === ParagraphSizesEnum.MEDIUM,
      [`${this.cssPrefix}--is-large`]: this.size === ParagraphSizesEnum.LARGE,
      [`${this.cssPrefix}--has-no-margin`]: this.hasNoMargin,
    };
  }

}

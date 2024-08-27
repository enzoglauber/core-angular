import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from "../base.component";
import { ButtonSizesEnum } from './enum/button-sizes.enum';
import { ButtonTypesEnum } from "./enum/button-types.enum";

@Component({
  selector: 'und-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent extends BaseComponent {
  @Output() onClick = new EventEmitter();

  @Input('spinning')
  isSpinning: boolean | undefined;

  @Input()
  htmlType = 'button';

  @Input('size')
  buttonSize: string = ButtonSizesEnum.MEDIUM;

  @Input('type')
  buttonType: string = ButtonTypesEnum.SECONDARY;

  @Input('outline')
  buttonIsOutline: boolean | undefined;

  @Input('block')
  buttonIsBlock: boolean | undefined;

  @Input('disabled')
  buttonIsDisabled: boolean | undefined;

  constructor() {
    super('button');
  }

  get buttonClasses() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-small`]: this.buttonSize === ButtonSizesEnum.SMALL,
      [`${this.cssPrefix}--is-medium`]: this.buttonSize === ButtonSizesEnum.MEDIUM,
      [`${this.cssPrefix}--is-large`]: this.buttonSize === ButtonSizesEnum.LARGE,
      [`${this.cssPrefix}--is-primary`]: this.buttonType === ButtonTypesEnum.PRIMARY,
      [`${this.cssPrefix}--is-secondary`]: this.buttonType === ButtonTypesEnum.SECONDARY,
      [`${this.cssPrefix}--is-text`]: this.buttonType === ButtonTypesEnum.TEXT,
      [`${this.cssPrefix}--is-outline`]: this.buttonIsOutline === true,
      [`${this.cssPrefix}--is-block`]: this.buttonIsBlock === true,
      [`${this.cssPrefix}--is-disabled`]: this.buttonIsDisabled === true,
      [`${this.cssPrefix}--is-spinning`]: this.isSpinning,
      [`${this.cssPrefix}--is-wrapper`]: this.buttonType === ButtonTypesEnum.NONE,
    };
  }

  onClickHandler(): void {
    this.onClick.emit();
  }
}

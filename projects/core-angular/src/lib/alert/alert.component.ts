import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from "../base.component";

@Component({
  selector: 'und-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent {
  @Input('title')
  title: string | undefined;

  @Input('okText')
  okText = 'Continuar';

  @Input('message')
  message: string | undefined;

  @Input('isVisible')
  isVisible: boolean | undefined;

  @Output() ok = new EventEmitter();

  constructor() {
    super('alert');
  }

  get rootClasses() {
    return {
      [`${this.cssPrefix}`]: true,
    }
  }

  onOkClick() {
    this.ok.emit();
  }
}

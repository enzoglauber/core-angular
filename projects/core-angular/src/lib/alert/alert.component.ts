import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent {
  @Input('title')
  title: string;

  @Input('okText')
  okText = 'Continuar';

  @Input('message')
  message: string;

  @Input('isVisible')
  isVisible: boolean;

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

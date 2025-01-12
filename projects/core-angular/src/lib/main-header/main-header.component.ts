import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-main-header',
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent extends BaseComponent {
  @Input('title')
  title: string;
  isOpen = false;

  constructor() {
    super('main-header');
  }

  get rootClasses() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-open`]: this.isOpen,
    }
  }

  toogleMenuVisibility() {
    this.isOpen = !this.isOpen;
  }
}

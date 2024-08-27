import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-side-navbar',
  templateUrl: './side-navbar.component.html',
})
export class SideNavbarComponent extends BaseComponent {
  constructor() {
    super('side-navbar');
  }

  get rootClasses() {
    return {
      [`${this.cssPrefix}`]: true,
    }
  }
}

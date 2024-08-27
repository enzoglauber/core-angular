import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent extends BaseComponent implements OnInit {

  constructor() {
    super('layout');
  }

  ngOnInit() {
  }

  get rootClassNames() {
    return {
      [`${this.cssPrefix}`]: true,
    }
  }
}

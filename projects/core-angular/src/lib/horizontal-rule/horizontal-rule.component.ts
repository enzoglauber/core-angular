import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from "../base.component";

@Component({
  selector: 'und-hr',
  templateUrl: './horizontal-rule.component.html',
})
export class HorizontalRuleComponent extends BaseComponent {

  constructor() {
    super('horizontal-rule');
  }

  get rootStyleClasses() {
    return {
      [`${this.cssPrefix}`]: true,
    }
  }

}

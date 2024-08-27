import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from "../../base.component";

@Component({
  selector: 'und-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent extends BaseComponent implements OnInit {
  @Input('width')
  width: number;

  isOpen = false;

  constructor() {
    super('aside');
  }

  ngOnInit() {
  }

  toggleVisibility(event: MouseEvent) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  get rootClassNames() {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-open`]: this.isOpen,
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from "../base.component";

@Component({
  selector: 'und-expandable-topic',
  templateUrl: './expandable-topic.component.html',
})
export class ExpandableTopicComponent extends BaseComponent implements OnInit {
  isClosed = false;

  @Input()
  title: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  startOpen: boolean | undefined;

  constructor() {
    super('expandable-topic');
  }

  ngOnInit(): void {
    if (!this.startOpen) {
      this.isClosed = true;
    }
  }

  get rootStyleClasses() {

    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-closed`]: this.isClosed,
    }
  }

  toggleOpenState(event: MouseEvent) {
    event.preventDefault();
    this.isClosed = !this.isClosed;
  }
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BaseComponent} from '../base.component';

@Component({
  selector: 'und-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @Input('noTitle')
  noTitle: boolean;

  @Input('noCloseButton')
  noCloseButton: boolean;

  @Input('noHeader')
  noHeader: boolean;

  @Input('title')
  title: string;

  @Input('isVisible')
  isVisible: boolean;

  constructor() {
    super('modal');
  }

  onCloseHandler(): void {
    this.onClose.emit();
  }

  get rootClasses(): object {
    return {
      [`${this.cssPrefix}`]: true,
      [`${this.cssPrefix}--is-visible`]: this.isVisible,
    };
  }

}

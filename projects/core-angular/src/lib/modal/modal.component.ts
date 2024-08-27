import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'und-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  @Input('noTitle')
  noTitle: boolean | undefined;

  @Input('noCloseButton')
  noCloseButton: boolean | undefined;

  @Input('noHeader')
  noHeader: boolean | undefined;

  @Input('title')
  title: string | undefined;

  @Input('isVisible')
  isVisible: boolean | undefined;

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

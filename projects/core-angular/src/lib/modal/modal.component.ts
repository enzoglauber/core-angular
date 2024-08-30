import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../base.component';
import { BoxedContentSizesEnum } from '../boxed-content';
import { BoxedContentShadowSizesEnum } from '../boxed-content/enum/boxed-content-shadow-sizes.enum';

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

  get BoxedContentSizes() {
    return BoxedContentSizesEnum;
  }

  get BoxedContentShadowSizes() {
    return BoxedContentShadowSizesEnum;
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

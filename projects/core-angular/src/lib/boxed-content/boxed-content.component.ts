import { Component, Input, OnInit } from '@angular/core';
import { BoxedContentShadowSizesEnum } from "./enum/boxed-content-shadow-sizes.enum";
import { BoxedContentSizesEnum } from './enum/boxed-content-sizes.enum';

@Component({
  selector: 'und-boxed-content',
  templateUrl: './boxed-content.component.html',
})
export class BoxedContentComponent implements OnInit {
  @Input('shaded')
  isShaded: boolean | undefined;

  @Input('maxWidth')
  maxWidth: number | undefined;

  @Input('size')
  size: BoxedContentSizesEnum = BoxedContentSizesEnum.MEDIUM;

  @Input('shadowSize')
  shadowSize: BoxedContentShadowSizesEnum = BoxedContentShadowSizesEnum.MEDIUM;

  @Input('noPadding')
  noPadding: boolean | undefined;

  constructor() { }

  ngOnInit() {
  }

  get boxAvailableSizes() {
    return BoxedContentSizesEnum;
  }

  get boxAvailableShadowSizes() {
    return BoxedContentShadowSizesEnum;
  }
}

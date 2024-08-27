import { Component, OnInit, Input } from '@angular/core';
import { BoxedContentSizesEnum } from './enum/boxed-content-sizes.enum';
import {BoxedContentShadowSizesEnum} from "./enum/boxed-content-shadow-sizes.enum";

@Component({
  selector: 'und-boxed-content',
  templateUrl: './boxed-content.component.html',
})
export class BoxedContentComponent implements OnInit {
  @Input('shaded')
  isShaded: boolean;

  @Input('maxWidth')
  maxWidth: number;

  @Input('size')
  size: BoxedContentSizesEnum = BoxedContentSizesEnum.MEDIUM;

  @Input('shadowSize')
  shadowSize: BoxedContentShadowSizesEnum = BoxedContentShadowSizesEnum.MEDIUM;

  @Input('noPadding')
  noPadding: boolean;

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

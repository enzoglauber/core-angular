import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from "../../base.component";

@Component({
  selector: 'und-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent extends BaseComponent implements OnInit {
  constructor() {
    super('article');
  }

  ngOnInit() {
  }

  get rootClassNames() {
    return {
      [`${this.cssPrefix}`]: true,
    }
  }
}

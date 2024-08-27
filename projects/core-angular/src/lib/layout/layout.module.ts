import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared.module";
import {ArticleComponent} from "./article/article.component";

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    ArticleComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
    AsideComponent,
    ArticleComponent,
  ]
})
export class LayoutModule { }

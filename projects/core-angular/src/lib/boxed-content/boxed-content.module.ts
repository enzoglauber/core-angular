import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxedContentComponent } from './boxed-content.component';



@NgModule({
  declarations: [BoxedContentComponent],
  imports: [
    CommonModule
  ],
  exports: [BoxedContentComponent]
})
export class BoxedContentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacerComponent } from './spacer.component';



@NgModule({
  declarations: [SpacerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpacerComponent,
  ]
})
export class SpacerModule { }

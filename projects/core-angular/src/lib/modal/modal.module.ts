import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ModalComponent } from './modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }

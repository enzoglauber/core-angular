import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { SharedModule } from '../shared.module';


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

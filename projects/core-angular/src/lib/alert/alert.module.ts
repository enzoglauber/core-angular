import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { SharedModule } from '../shared.module';
import {ModalModule} from "../modal/modal.module";

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }

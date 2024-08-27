import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainHeaderComponent } from './main-header.component';
import { SharedModule } from '../shared.module';
import {ModalModule} from "../modal/modal.module";

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    RouterModule
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class MainHeaderModule { }

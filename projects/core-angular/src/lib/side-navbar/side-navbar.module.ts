import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar.component';
import { SharedModule } from '../shared.module';
import {ModalModule} from "../modal/modal.module";

@NgModule({
  declarations: [SideNavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
  ],
  exports: [
    SideNavbarComponent
  ]
})
export class SideNavbarModule { }

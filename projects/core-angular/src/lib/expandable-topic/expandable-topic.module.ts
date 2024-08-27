import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableTopicComponent } from './expandable-topic.component';
import {SharedModule} from "../shared.module";



@NgModule({
  declarations: [ExpandableTopicComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExpandableTopicComponent,
  ]
})
export class ExpandableTopicModule { }

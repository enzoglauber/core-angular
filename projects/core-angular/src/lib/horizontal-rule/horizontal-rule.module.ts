import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalRuleComponent } from './horizontal-rule.component';



@NgModule({
  declarations: [HorizontalRuleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalRuleComponent,
  ]
})
export class HorizontalRuleModule { }

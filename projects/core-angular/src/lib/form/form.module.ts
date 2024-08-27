import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {RadioButtonGroupComponent} from "./radio-button-group/radio-button-group.component";
import {CheckboxGroupComponent} from './checkbox-group';



@NgModule({
  declarations: [
    FormComponent,
    CheckboxComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    CheckboxGroupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FormComponent,
    CheckboxComponent,
    RadioButtonComponent,
    RadioButtonGroupComponent,
    CheckboxGroupComponent,
  ]
})
export class FormModule { }

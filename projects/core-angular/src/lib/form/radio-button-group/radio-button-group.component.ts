import { Component, forwardRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from "../../base.component";
import { CoreAngularService } from "../../core-angular.service";
import { radioGroupItemsType } from "./types/radio-group-items.type";

@Component({
  selector: 'und-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
      multi: true,
    }
  ]
})
export class RadioButtonGroupComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  private _value: any;
  id: string;
  groupName: string;
  form: any;

  @Input('layout')
  layout: string = 'normal';

  @Input('items')
  radioItems: radioGroupItemsType[] | undefined;

  @Input('noBullet')
  noBullet = false;

  constructor(
    private readonly caService: CoreAngularService,
    private readonly _renderer: Renderer2,
    private readonly _fb: FormBuilder,
  ) {
    super('radio-button-group');
    this.id = caService.generateUniqueId();
    this.groupName = `${this.id}-name`;
    this.form = this._fb.group({
      radiosGroup: [null]
    });

  }

  ngOnInit() {
    this.form.get('radiosGroup').valueChanges.subscribe((value: any) => {
      this.onValueChange(value);
    })
  }

  writeValue(newValue: any): void {
    this.value = newValue;
    this.setNewValue(newValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // this._renderer.setProperty(this.inputElement.nativeElement, 'disabled',  isDisabled);
  }

  onChange: any = () => { };

  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }

  onValueChange(value: any) {
    this.value = value;
  }

  setNewValue(value: any) {
    this.form.get('radiosGroup').setValue(value);
  }
}

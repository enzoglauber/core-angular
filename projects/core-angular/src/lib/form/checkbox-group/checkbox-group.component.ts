import {Component, ElementRef, forwardRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseComponent} from '../../base.component';
import {CoreAngularService} from '../../core-angular.service';
import {checkboxGroupItemsType} from './types/checkbox-group-items.type';

@Component({
  selector: 'und-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true,
    }
  ]
})
export class CheckboxGroupComponent extends BaseComponent implements OnInit, OnChanges, ControlValueAccessor {
  private _value = [];
  id: string;
  groupName: string;
  form: any;

  @Input('layout')
  layout = 'normal';

  @Input('items')
  checkboxItems: checkboxGroupItemsType[];

  @Input('noBullet')
  noBullet = false;

  constructor(
    private readonly caService: CoreAngularService,
    private readonly _renderer: Renderer2,
    private readonly _fb: FormBuilder,
  ) {
    super('checkbox-group');
    this.id = caService.generateUniqueId();
    this.groupName = `${this.id}-name`;
    // this.form = this._fb.group({
    //   checkboxGroup: [[]]
    // });
  }

  ngOnInit(): void {
    console.log('iniciou', this.checkboxItems)
    // this.form.get('checkboxGroup').valueChanges.subscribe(value => {
    //   this.onValueChange(value);
    // });
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

  get value(): any[] {
    return this._value;
  }

  set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }

  onValueChange(value): void {

    this.value = value;
  }

  setNewValue(value): void {
    // this.form.get('checkboxGroup').setValue(value);
  }

  onCheckboxValueChanges({id, value, isChecked}): void {
    const previousValues = this.value;
    if (isChecked) {
      this.value = [...previousValues, value];
    } else {
      this.value = previousValues.filter(oldValue => oldValue !== value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    // this.checkboxItems = this.checkboxItems.map(item => {
    //   item.id = this.caService.generateUniqueId();
    //   return item;
    // });
  }
}

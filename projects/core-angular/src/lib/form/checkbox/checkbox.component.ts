import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import { CoreAngularService } from '../../core-angular.service';

@Component({
  selector: 'und-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    }
  ]
})
export class CheckboxComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  private _value: any;

  @Input()
  id: string | undefined;

  // @ts-ignore
  @ViewChild('inputElement')
  inputElement: ElementRef | undefined;

  @Input('checkboxValue')
  checkboxValue: any;

  @Input('checkboxName')
  checkboxName: string | undefined;

  @Input('isChecked')
  isChecked: boolean | undefined;

  @Input('disabled')
  disabled: boolean | undefined;

  @Input('isBlock')
  isBlock = false;

  @Input('noBullet')
  noBullet = false;

  @Output() valueChangesGroup = new EventEmitter();

  constructor(
    private readonly caService: CoreAngularService,
    private readonly _renderer: Renderer2
  ) {
    super('checkbox');
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.caService.generateUniqueId();
    }
  }

  writeValue(newValue: any): void {
    this.value = newValue;

    if (newValue === this.checkboxValue) {
      this.setChecked(true);
      return;
    }

    this.setChecked(false);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this.inputElement?.nativeElement, 'disabled', isDisabled);
  }

  onChange: any = () => { };

  onTouched: any = () => { };

  get value(): any {
    return this._value;
  }

  set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouched();
  }

  onChangeByGroup(id: any, value: any, isChecked: boolean): void {
    this.valueChangesGroup.emit({ id, value, isChecked });
  }

  onValueChange(isChecked: boolean, value: any, id: any): any {
    this.onChangeByGroup(id, value, isChecked);
    this.value = this.checkboxValue ? value : isChecked;
  }

  setChecked(value: any): any {
    if (!this.inputElement) {
      return;
    }

    this._renderer.setProperty(this.inputElement.nativeElement, 'checked', value);
  }

  get cssClassNames() {
    return {
      [this.cssPrefix]: true,
      [`${this.cssPrefix}--is-block`]: this.isBlock,
      [`${this.cssPrefix}--has-no-bullet`]: this.noBullet,
    }
  }
}

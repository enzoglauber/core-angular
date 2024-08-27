import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {BaseComponent} from "../../base.component";
import {CoreAngularService} from "../../core-angular.service";

@Component({
  selector: 'und-radio-button',
  templateUrl: './radio-button.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    }
  ]
})
export class RadioButtonComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  private _value;
  id: string;

  // @ts-ignore
  @ViewChild('inputElement')
  inputElement: ElementRef;

  @Input('radioValue')
  radioValue: any;

  @Input('radioName')
  radioName: string;

  @Input('isBlock')
  isBlock = false;

  @Input('noBullet')
  noBullet = false;

  constructor(
    private readonly caService: CoreAngularService,
    private readonly _renderer: Renderer2
  ) {
    super('radio-button');
    this.id = caService.generateUniqueId();
  }

  ngOnInit() {
  }

  writeValue(newValue: any): void {
    this.value = newValue;

    if (newValue === this.radioValue) {
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
    this._renderer.setProperty(this.inputElement.nativeElement, 'disabled',  isDisabled);
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

  onValueChange(isChecked, value) {
    if (!isChecked) {
      return;
    }

    this.value = value;
  }

  setChecked(value) {
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

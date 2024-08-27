import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from './close-icon.component';
import {SmsIconComponent} from "./sms-icon.component";
import {EmailIconComponent} from "./email-icon.component";
import {DoneIconComponent} from "./done-icon.component";
import {UnidasLogoIconComponent} from "./unidas-logo-icon.component";
import {MenuOutlinedIconComponent} from "./menu-outlined-icon.component";
import {ListIconComponent} from "./list-icon.component";
import {ExitIconComponent} from "./exit-icon.component";
import {HomeIconComponent} from "./home-icon.component";
import {CalendarCheckIconComponent} from "./calendar-check-icon.component";
import {ReportIconComponent} from "./report-icon.component";
import {DocumentsIconComponent} from "./documents-icon.component";
import {UserIconComponent} from "./user-icon.component";
import {StoreIconComponent} from "./store-icon.component";
import {SupportIconComponent} from "./support-icon.component";
import {ArrowUpIconComponent} from "./arrow-up-icon.component";
import {CalendarSearchIconComponent} from "./calendar-search-icon.component";
import {CarIconComponent} from './car-icon.component';
import {ShieldIconComponent} from './shield-icon.component';
import {PaymentMethodsIconComponent} from './payment-methods-icon.component';

@NgModule({
  declarations: [
    CloseIconComponent,
    SmsIconComponent,
    EmailIconComponent,
    DoneIconComponent,
    UnidasLogoIconComponent,
    MenuOutlinedIconComponent,
    ListIconComponent,
    ExitIconComponent,
    HomeIconComponent,
    CalendarCheckIconComponent,
    ReportIconComponent,
    DocumentsIconComponent,
    UserIconComponent,
    StoreIconComponent,
    SupportIconComponent,
    ArrowUpIconComponent,
    CalendarSearchIconComponent,
    CarIconComponent,
    ShieldIconComponent,
    PaymentMethodsIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CloseIconComponent,
    SmsIconComponent,
    EmailIconComponent,
    DoneIconComponent,
    UnidasLogoIconComponent,
    MenuOutlinedIconComponent,
    ListIconComponent,
    ExitIconComponent,
    HomeIconComponent,
    CalendarCheckIconComponent,
    ReportIconComponent,
    DocumentsIconComponent,
    UserIconComponent,
    StoreIconComponent,
    SupportIconComponent,
    ArrowUpIconComponent,
    CalendarSearchIconComponent,
    CarIconComponent,
    ShieldIconComponent,
    PaymentMethodsIconComponent,
  ]
})
export class IconsModule { }

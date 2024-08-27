import { NgModule } from '@angular/core';
import { BoxedContentModule } from './boxed-content/boxed-content.module';
import { HeroImageModule } from './hero-image/hero-image.module';
import { CallToActionAreaModule } from './call-to-action-area/call-to-action-area.module';
import { SpacerModule } from './spacer/spacer.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { ButtonModule } from './button/button.module';
import {FormModule} from './form/form.module';
import {ModalModule} from './modal/modal.module';
import {IconsModule} from './icons/icons.module';
import {SpinnerModule} from './spinner/spinner.module';
import {HorizontalRuleModule} from './horizontal-rule/horizontal-rule.module';
import {ParagraphModule} from './paragraph/paragraph.module';
import {AlertModule} from './alert/alert.module';
import {MainHeaderModule} from './main-header/main-header.module';
import {LayoutModule} from './layout/layout.module';
import {SideNavbarModule} from './side-navbar/side-navbar.module';
import {ExpandableTopicModule} from './expandable-topic/expandable-topic.module';

@NgModule({
  declarations: [],
  imports: [
    BoxedContentModule,
    HeroImageModule,
    CallToActionAreaModule,
    SpacerModule,
    HttpRequestModule,
    ButtonModule,
    FormModule,
    ModalModule,
    IconsModule,
    SpinnerModule,
    HorizontalRuleModule,
    ParagraphModule,
    AlertModule,
    MainHeaderModule,
    LayoutModule,
    SideNavbarModule,
    ExpandableTopicModule,
  ],
  exports: [
    BoxedContentModule,
    HeroImageModule,
    CallToActionAreaModule,
    SpacerModule,
    // HttpRequestModule,
    ButtonModule,
    FormModule,
    ModalModule,
    IconsModule,
    SpinnerModule,
    HorizontalRuleModule,
    ParagraphModule,
    AlertModule,
    MainHeaderModule,
    LayoutModule,
    SideNavbarModule,
    ExpandableTopicModule,
  ]
})
export class CoreAngularModule { }

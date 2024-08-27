import { NgModule } from '@angular/core';
import { BoxedContentModule } from './boxed-content/boxed-content.module';
import { ButtonModule } from "./button/button.module";
import { IconsModule } from "./icons/icons.module";
import { ParagraphModule } from "./paragraph/paragraph.module";
import { SpacerModule } from "./spacer/spacer.module";

@NgModule({
  declarations: [],
  imports: [
    BoxedContentModule,
    ButtonModule,
    IconsModule,
    SpacerModule,
    ParagraphModule
  ],
  exports: [
    BoxedContentModule,
    ButtonModule,
    IconsModule,
    SpacerModule,
    ParagraphModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from './hero-image.component';



@NgModule({
  declarations: [HeroImageComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroImageComponent]
})
export class HeroImageModule { }

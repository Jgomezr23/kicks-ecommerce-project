import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPagesComponent } from './pages/about-us-pages/about-us-pages.component';


@NgModule({
  declarations: [
    AboutUsPagesComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }

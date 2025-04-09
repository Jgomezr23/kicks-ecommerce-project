import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPagesComponent } from './pages/about-us-pages/about-us-pages.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyPurchasesRoutingModule } from './my-purchases-routing.module';
import { MyPurchasesPageComponent } from './pages/my-purchases-page/my-purchases-page.component';

@NgModule({
  declarations: [MyPurchasesPageComponent],
  imports: [CommonModule, MyPurchasesRoutingModule],
})
export class MyPurchasesModule {}

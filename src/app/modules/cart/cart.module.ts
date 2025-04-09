import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

@NgModule({
  declarations: [CartPageComponent, CheckoutPageComponent],
  imports: [CommonModule, CartRoutingModule, ReactiveFormsModule, FormsModule],
})
export class CartModule {}

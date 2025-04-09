import { Component, OnInit } from '@angular/core';
import { ShoesCart } from '../../../../core/models/ShoesCart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService) {}

  public cartItems: ShoesCart[] = [];
  public totalPrice: number = 0;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  deleteCartItem(shoes: ShoesCart) {
    this.cartService.deleteCartItem(shoes);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  increaseQuantity(item: ShoesCart) {
    item.quantity = (item.quantity || 1) + 1;
    this.calculateTotalPrice();
    this.cartService.updateCartItem(item);
  }

  decreaseQuantity(item: ShoesCart) {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotalPrice();
      this.cartService.updateCartItem(item);
    }
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );

    this.cartService.setTotalPrice(this.totalPrice + 6.99);
  }
}

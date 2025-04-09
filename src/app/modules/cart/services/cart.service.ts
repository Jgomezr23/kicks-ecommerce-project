import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Cart } from '../../../core/models/Cart.model';
import { ShoesCart } from '../../../core/models/ShoesCart.model';
import { UserCartService } from './user-cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiUrl = environment.api;

  constructor(
    private http: HttpClient,
    private userCartService: UserCartService,
    private router: Router
  ) {}

  private get storageKey(): string {
    return `cartItems_${this.userCartService.getUser()?.id}`;
  }

  private cartItems: ShoesCart[] = [];
  private totalPrice: number = 0;

  saveCart(cart: Cart) {
    return this.http.post(`${this.apiUrl}/cart`, cart).pipe(
      tap(() => {
        this.userCartService.clearCartForCurrentUser();
        this.router.navigate(['/my-purchases']);
      })
    );
  }

  private updateCartStorage(cartItems: ShoesCart[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cartItems));
  }

  addToCart(shoes: ShoesCart) {
    const existingItem = this.cartItems.find(
      (item) =>
        item.name === shoes.name &&
        item.color === shoes.color &&
        item.size === shoes.size
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      shoes.quantity = 1;
      this.cartItems.push(shoes);
      this.updateCartStorage(this.cartItems);
    }

    this.updateCartStorage(this.cartItems);
  }

  getCartItems(): ShoesCart[] {
    this.cartItems = this.userCartService.getCartItemsForCurrentUser();
    return this.cartItems;
  }

  deleteCartItem(shoes: ShoesCart) {
    this.cartItems = this.cartItems.filter((item) => item !== shoes);
    this.updateCartStorage(this.cartItems);
  }

  updateCartItem(shoes: ShoesCart) {
    const index = this.cartItems.findIndex(
      (item) =>
        item.name === shoes.name &&
        item.color === shoes.color &&
        item.size === shoes.size
    );

    if (index !== -1) {
      this.cartItems[index] = shoes;
      this.updateCartStorage(this.cartItems);
    }
  }

  setTotalPrice(price: number) {
    this.totalPrice = price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}

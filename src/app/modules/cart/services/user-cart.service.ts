import { Injectable } from '@angular/core';
import { ShoesCart } from '../../../core/models/ShoesCart.model';
import { UserJSON } from '../../../core/models/UserJSON.model';

@Injectable({
  providedIn: 'root',
})
export class UserCartService {
  constructor() {}

  private storageKey = 'cartItems';

  getUser(): UserJSON {
    const userString = localStorage.getItem('user_session');
    return userString ? JSON.parse(userString) : null;
  }

  saveCartForUser(cartItems: ShoesCart[]): void {
    const user = this.getUser();
    if (user) {
      const userId = user.id;
      localStorage.setItem(
        `${this.storageKey}_${userId}`,
        JSON.stringify(cartItems)
      );
    }
  }

  getCartItemsForCurrentUser(): ShoesCart[] {
    const user = this.getUser();
    if (user) {
      const userId = user.id;
      const cartData = localStorage.getItem(`${this.storageKey}_${userId}`);
      return cartData ? JSON.parse(cartData) : [];
    }
    return [];
  }

  clearCartForCurrentUser(): void {
    const user = this.getUser();
    if (user) {
      const userId = user.id;
      localStorage.removeItem(`${this.storageKey}_${userId}`);
    }
  }
}

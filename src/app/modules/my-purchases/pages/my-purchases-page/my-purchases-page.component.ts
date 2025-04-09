import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from '../../../../core/models/Cart.model';
import { ShoesCart } from '../../../../core/models/ShoesCart.model';
import { UserJSON } from '../../../../core/models/UserJSON.model';
import { AuthService } from '../../../auth/services/auth.service';
import { MyPurchasesService } from '../../services/my-purchases.service';

@Component({
  selector: 'app-my-purchases-page',
  templateUrl: './my-purchases-page.component.html',
  styleUrls: ['./my-purchases-page.component.css'],
})
export class MyPurchasesPageComponent implements OnInit, OnDestroy {
  constructor(
    private myPurchasesService: MyPurchasesService,
    private authService: AuthService
  ) {}

  public purchases: ShoesCart[] = [];
  private user!: UserJSON;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.getUserInfo();
    this.getMyPurchases(this.user.id);
  }

  getMyPurchases(userId: string) {
    this.subscription = this.myPurchasesService
      .getPurchasesByUserId(userId)
      .subscribe((response) => {
        this.purchases = [];
        response.forEach((purchase: Cart) => {
          this.purchases.push(...purchase.items);
        });
      });
  }

  getUserInfo() {
    this.user = this.authService.getUser();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

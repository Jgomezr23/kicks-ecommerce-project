import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shoes } from '../../../../core/models/Shoes.model';
import { ShoesCart } from '../../../../core/models/ShoesCart.model';
import { AuthService } from '../../../auth/services/auth.service';
import { CartService } from '../../../cart/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  private subscription!: Subscription;
  public singleShoe!: Shoes;
  public selectedSize!: string;
  public selectedColor!: string;
  public showAddedToCartMessage: boolean = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getSingleShoesInfo();
  }

  getSingleShoesInfo(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.subscription = this.productService
      .getSingleShoes(productId)
      .subscribe((response) => {
        this.singleShoe = response;
        this.selectedColor = this.singleShoe.colors[0];
        this.selectedSize = this.singleShoe.sizes[0];
      });
  }

  addToCart(shoes: Shoes) {
    if (this.authService.isAuthenticated()) {
      const shoesCart: ShoesCart = {
        id: shoes.id,
        name: shoes.name,
        color: this.selectedColor,
        size: this.selectedSize,
        price: shoes.price,
        image: shoes.images[0],
        quantity: 1,
      };

      this.cartService.addToCart(shoesCart);

      this.showAddedToCartMessage = true;
      setTimeout(() => {
        this.showAddedToCartMessage = false;
      }, 2000);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

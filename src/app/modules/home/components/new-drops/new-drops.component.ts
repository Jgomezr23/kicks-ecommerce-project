import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shoes } from '../../../../core/models/Shoes.model';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'app-new-drops',
  templateUrl: './new-drops.component.html',
  styleUrls: ['./new-drops.component.css'],
})
export class NewDropsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  private subscription!: Subscription;
  public shoes!: Shoes[];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getNewDrops();
  }

  getNewDrops() {
    this.subscription = this.productService
      .getNewReleasesLimit(4)
      .subscribe((response) => {
        this.shoes = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

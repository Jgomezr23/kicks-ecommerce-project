import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Shoes } from '../../../../core/models/Shoes.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-drops-page',
  templateUrl: './new-drops-page.component.html',
  styleUrls: ['./new-drops-page.component.css'],
})
export class NewDropsPageComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  private subscription!: Subscription;
  public shoes!: Shoes[];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getNewDrops();
  }

  getNewDrops() {
    this.subscription = this.productService
      .getNewReleases()
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

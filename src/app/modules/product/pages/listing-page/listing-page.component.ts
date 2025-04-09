import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Categories } from '../../../../core/models/Categories.model';
import { Shoes } from '../../../../core/models/Shoes.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  private subscription!: Subscription;
  public shoes!: Shoes[];
  public categories!: Categories[];
  public selectedCategoryId: string | null = null;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllShoes();
    this.getAllCategories();
  }

  getAllShoes(): void {
    this.subscription = this.productService
      .getAllShoes()
      .subscribe((response) => {
        this.shoes = response;
      });
  }

  getAllCategories(): void {
    this.subscription = this.productService
      .getCategories()
      .subscribe((response) => {
        this.categories = response;
      });
  }

  getShoesByCategory(categoryId: string): void {
    this.subscription = this.productService
      .getShoesByCategory(categoryId)
      .subscribe((response) => {
        this.shoes = response;
      });
  }

  selectCategory(categoryId: string): void {
    this.selectedCategoryId = categoryId;
    if (categoryId) {
      this.getShoesByCategory(categoryId);
    } else {
      this.getAllShoes();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

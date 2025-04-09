import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Shoes } from '../../../../core/models/Shoes.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  displayedColumns: string[] = [
    'id',
    'name',
    'newRelease',
    'images',
    'price',
    'colors',
    'sizes',
  ];
  dataSource!: MatTableDataSource<Shoes>;

  products: Shoes[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getProductsInfo();
  }

  getProductsInfo(): void {
    this.subscription = this.adminService
      .getAllProducts()
      .subscribe((data: Shoes[]) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(data);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

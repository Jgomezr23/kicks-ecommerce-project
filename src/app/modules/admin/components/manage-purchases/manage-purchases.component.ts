import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CartJSON } from '../../../../core/models/CartJSON.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-manage-purchases',
  templateUrl: './manage-purchases.component.html',
  styleUrls: ['./manage-purchases.component.css'],
})
export class ManagePurchasesComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  displayedColumns: string[] = ['id', 'userId', 'items', 'totalPrice'];
  dataSource!: MatTableDataSource<CartJSON>;

  purchases: CartJSON[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getPurchasesInfo();
  }

  getPurchasesInfo(): void {
    this.subscription = this.adminService
      .getAllPurchases()
      .subscribe((data: CartJSON[]) => {
        this.purchases = data;
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

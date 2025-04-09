import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManagePurchasesComponent } from './components/manage-purchases/manage-purchases.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    ManagePurchasesComponent,
    RegisterAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../../core/guards/admin.guard';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManagePurchasesComponent } from './components/manage-purchases/manage-purchases.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-purchases',
    component: ManagePurchasesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'register',
    component: RegisterAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { NewDropsPageComponent } from './pages/new-drops-page/new-drops-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListingPageComponent,
  },
  {
    path: 'new-drops',
    component: NewDropsPageComponent,
  },
  {
    path: ':id',
    component: ProductPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

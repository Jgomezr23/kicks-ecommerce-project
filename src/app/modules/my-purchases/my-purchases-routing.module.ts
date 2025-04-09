import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPurchasesPageComponent } from './pages/my-purchases-page/my-purchases-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyPurchasesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPurchasesRoutingModule {}

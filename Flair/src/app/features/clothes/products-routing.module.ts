import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemsComponent } from './components/clothes-items/product-items.component';

const routes: Routes = [
  { path: ':categoryId', component: ProductItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

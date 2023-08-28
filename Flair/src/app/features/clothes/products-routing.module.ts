import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

const routes: Routes = [
  { path: '', component: ProductItemsComponent },
  { path: ':categoryId', component: ProductItemsComponent },
  { path: ':categoryId/:productId', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

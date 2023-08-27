import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddToBagComponent } from './components/add-to-bag/add-to-bag.component';

const routes: Routes = [
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'bag',
    component: AddToBagComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

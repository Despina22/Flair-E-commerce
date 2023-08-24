import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [CommonModule, ShopRoutingModule],
  exports: [],
})
export class ShopModule {}

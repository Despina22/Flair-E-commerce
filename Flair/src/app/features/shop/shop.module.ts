import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopRoutingModule } from './shop-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [],
})
export class ShopModule {}

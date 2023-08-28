import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddToBagComponent } from './components/add-to-bag/add-to-bag.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [WishlistComponent, AddToBagComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatIconModule,
  ],
  exports: [],
})
export class ShopModule {}

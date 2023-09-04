import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductItemsComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatIconModule,
    FormsModule,
  ],
})
export class ProductsModule {}

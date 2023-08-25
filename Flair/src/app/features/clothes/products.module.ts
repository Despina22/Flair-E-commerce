import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemsComponent } from './components/clothes-items/product-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductItemsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MatIconModule],
})
export class ProductsModule {}

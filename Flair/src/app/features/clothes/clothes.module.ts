import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ClothesItemsComponent } from './components/clothes-items/clothes-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ClothesItemsComponent],
  imports: [CommonModule, ClothesRoutingModule, SharedModule, MatIconModule],
})
export class ClothesModule {}

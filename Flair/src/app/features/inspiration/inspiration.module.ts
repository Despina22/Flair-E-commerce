import { NgModule } from '@angular/core';
import { InspireComponent } from './components/inspire/inspire.component';
import { CommonModule } from '@angular/common';
import { InspirationRoutingModule } from './inspiration-routing.module';

@NgModule({
  declarations: [InspireComponent],
  imports: [CommonModule, InspirationRoutingModule],
  exports: [],
})
export class InspirationModule {}

import { NgModule } from '@angular/core';
import { InspireComponent } from './components/inspire/inspire.component';
import { CommonModule } from '@angular/common';
import { InspirationRoutingModule } from './inspiration-routing.module';
import { RouterModule } from '@angular/router';
import { InspirationComponent } from './components/inspiration/inspiration.component';

@NgModule({
  declarations: [InspireComponent, InspirationComponent],
  imports: [CommonModule, InspirationRoutingModule, RouterModule],
})
export class InspirationModule {}

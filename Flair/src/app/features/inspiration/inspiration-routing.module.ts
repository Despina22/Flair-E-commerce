import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspireComponent } from './components/inspire/inspire.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';

const routes: Routes = [
  { path: '', component: InspireComponent },
  { path: 'inspiration', component: InspirationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationRoutingModule {}

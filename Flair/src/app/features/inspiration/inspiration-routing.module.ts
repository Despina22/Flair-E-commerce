import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspireComponent } from './components/inspire/inspire.component';

const routes: Routes = [{ path: '', component: InspireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspirationRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesItemsComponent } from './components/clothes-items/clothes-items.component';

const routes: Routes = [
  { path: ':categoryId', component: ClothesItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothesRoutingModule {}

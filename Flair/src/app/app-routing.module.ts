import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/layouts/components/homepage/homepage.component';
import { LoginComponent } from './core/auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'clothing',
    loadChildren: () =>
      import('../app/features/clothes/clothes.module').then(
        (module) => module.ClothesModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

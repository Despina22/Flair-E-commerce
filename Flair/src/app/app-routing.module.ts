import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/layouts/components/homepage/landing-page.component';
import { LoginComponent } from './core/auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'clothing',
    loadChildren: () =>
      import('./features/clothes/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('../app/features/shop/shop.module').then(
        (module) => module.ShopModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

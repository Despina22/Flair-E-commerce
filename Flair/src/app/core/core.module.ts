import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './layouts/components/homepage/homepage.component';
import { FeaturesModule } from '../features/features.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderComponent, NavigationComponent, FooterComponent];
@NgModule({
  declarations: [...COMPONENTS, HomepageComponent, LoginComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    FeaturesModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}

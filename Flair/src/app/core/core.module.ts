import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [HeaderComponent, NavigationComponent, FooterComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  exports: [...COMPONENTS],
})
export class CoreModule {}

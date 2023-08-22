import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  exports: [HeaderComponent, NavigationComponent],
})
export class CoreModule {}

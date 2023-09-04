import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  categories = Categories;

  constructor(private router: Router) {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

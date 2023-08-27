import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';

@Component({
  selector: 'app-products-focus',
  templateUrl: './products-focus.component.html',
  styleUrls: ['./products-focus.component.scss'],
})
export class ProductsFocusComponent implements OnInit {
  categories = Categories;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

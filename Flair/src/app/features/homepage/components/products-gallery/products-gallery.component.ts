import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss'],
})
export class ProductsGalleryComponent implements OnInit {
  categories = Categories;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

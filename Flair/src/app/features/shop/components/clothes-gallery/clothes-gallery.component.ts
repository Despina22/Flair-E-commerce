import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';

@Component({
  selector: 'app-clothes-gallery',
  templateUrl: './clothes-gallery.component.html',
  styleUrls: ['./clothes-gallery.component.scss'],
})
export class ClothesGalleryComponent implements OnInit {
  categories = Categories;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';
import { Slider } from 'src/app/features/homepage/interfaces/slider.interface';

@Component({
  selector: 'app-product-essentials',
  templateUrl: './product-essentials.component.html',
  styleUrls: ['./product-essentials.component.scss'],
})
export class ProductEssentialsComponent implements OnInit {
  imageObject: Slider[] = [
    {
      image: '../../../../../assets/images/car-1.webp',
      thumbImage: '../../../../../assets/images/car-1.webp',
      alt: 'img-1',
    },
    {
      image: '../../../../../assets/images/car-2.jpg',
      thumbImage: '../../../../../assets/images/car-2.jpg',
      alt: 'img-2',
    },
    {
      image: '../../../../../assets/images/car-3.webp',
      thumbImage: '../../../../../assets/images/car-3.webp',
      alt: 'img-3',
    },
    {
      image: '../../../../../assets/images/car-4.webp',
      thumbImage: '../../../../../assets/images/car-4.webp',
      alt: 'img-4',
    },
    {
      image: '../../../../../assets/images/car-5.jpg',
      thumbImage: '../../../../../assets/images/car-5.jpg',
      alt: 'img-5',
    },
    {
      image: '../../../../../assets/images/car-6.webp',
      thumbImage: '../../../../../assets/images/car-6.webp',
      alt: 'img-6',
    },
  ];
  categories = Categories;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

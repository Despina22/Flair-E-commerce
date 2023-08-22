import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/features/interfaces/slider.interface';

@Component({
  selector: 'app-clothes-essentials',
  templateUrl: './clothes-essentials.component.html',
  styleUrls: ['./clothes-essentials.component.scss'],
})
export class ClothesEssentialsComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}

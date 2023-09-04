import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';

@Component({
  selector: 'app-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss'],
})
export class VideoOverlayComponent {
  categories = Categories;

  constructor(private router: Router) {}

  navigateToCategory(categoryId: number) {
    this.router.navigate(['clothing', categoryId]);
  }
}

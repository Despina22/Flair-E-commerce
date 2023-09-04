import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/features/clothes/enums/category.enum';
import { BagService } from 'src/app/features/shop/services/bag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  badgeValue: number = 0;
  searchValue: string = '';

  constructor(private bagService: BagService, private router: Router) {}

  ngOnInit() {
    this.bagService.bagItemsChanged$.subscribe(() => {
      this.updateBadgeValue();
    });

    this.updateBadgeValue();
  }

  onSearchInputEnter(): void {
    const searchValue: any = this.searchValue.trim().toUpperCase();
    const categoryId = Categories[searchValue];

    if (categoryId !== undefined) {
      this.router.navigate(['/clothing', categoryId]);
    }
  }

  private updateBadgeValue() {
    const bagItems = this.bagService.getBagItems();
    this.badgeValue = bagItems.length;
  }
}

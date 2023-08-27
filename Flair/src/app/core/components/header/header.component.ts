import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/features/shop/services/bag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  badgeValue: number = 0;

  constructor(private bagService: BagService) {}

  ngOnInit() {
    this.bagService.bagItemsChanged$.subscribe(() => {
      this.updateBadgeValue();
    });

    this.updateBadgeValue();
  }

  private updateBadgeValue() {
    const bagItems = this.bagService.getBagItems();
    this.badgeValue = bagItems.length;
  }
}

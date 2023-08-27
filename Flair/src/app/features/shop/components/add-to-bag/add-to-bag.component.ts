import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/features/clothes/interfaces/clothes.interface';
import { BagService } from '../../services/bag.service';

@Component({
  selector: 'app-add-to-bag',
  templateUrl: './add-to-bag.component.html',
  styleUrls: ['./add-to-bag.component.scss'],
})
export class AddToBagComponent implements OnInit {
  isBagEmpty: boolean = false;
  bagItems: { product: Clothes; selectedSize: string }[] = [];

  constructor(private bagService: BagService) {}

  ngOnInit(): void {
    const storedItems = JSON.parse(localStorage.getItem('bagItems') || '[]');
    this.bagItems = storedItems;
  }

  removeItem(item: { product: Clothes; selectedSize: string }): void {
    const index = this.bagItems.findIndex(
      (bagItem) =>
        bagItem.product === item.product &&
        bagItem.selectedSize === item.selectedSize
    );

    if (index !== -1) {
      this.bagItems.splice(index, 1);
      this.bagService.updateBagItems(this.bagItems);
      localStorage.setItem('bagItems', JSON.stringify(this.bagItems));
    }
  }
}

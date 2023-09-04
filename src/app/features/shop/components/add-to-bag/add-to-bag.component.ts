import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/features/clothes/interfaces/clothes.interface';
import { BagService } from '../../services/bag.service';
import { LocaleStorageBagItem } from '../../interfaces/locale-storage-bag-item.interface';

@Component({
  selector: 'app-add-to-bag',
  templateUrl: './add-to-bag.component.html',
  styleUrls: ['./add-to-bag.component.scss'],
})
export class AddToBagComponent implements OnInit {
  isBagEmpty: boolean = false;
  bagItems!: LocaleStorageBagItem[];
  totalPrice?: number;
  deliveryPrice: number = 20;

  constructor(private bagService: BagService) {}

  ngOnInit(): void {
    this.loadStoredItems();
    this.calculateTotalPrice();
    this.updateBagVisibility();
  }

  private loadStoredItems() {
    const storedItems = JSON.parse(localStorage.getItem('bagItems') || '[]');
    this.bagItems = storedItems.map((item: any) => ({
      ...item,
      selectedQuantity: 1,
    }));
  }

  private updatePriceAndTotal(): void {
    this.bagService.updateBagItems(this.bagItems);
    localStorage.setItem('bagItems', JSON.stringify(this.bagItems));
    this.calculateTotalPrice();
    this.updateBagVisibility();
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.bagItems.reduce(
      (total, item) => total + item.product.price * item.selectedQuantity,
      0
    );
  }

  private findBagItemIndex(item: LocaleStorageBagItem): number {
    return this.bagItems.findIndex(
      (bagItem) =>
        bagItem.product === item.product &&
        bagItem.selectedSize === item.selectedSize
    );
  }

  private updateBagVisibility(): void {
    this.isBagEmpty = this.bagItems.length === 0;
  }

  removeItem(item: LocaleStorageBagItem): void {
    const index = this.findBagItemIndex(item);

    if (index !== -1) {
      this.bagItems.splice(index, 1);
      this.updatePriceAndTotal();
    }
  }

  onQuantityChange(): void {
    this.updatePriceAndTotal();
  }
}

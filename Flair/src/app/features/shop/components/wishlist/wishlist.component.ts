import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Clothes } from 'src/app/features/clothes/interfaces/clothes.interface';
import { BagService } from '../../services/bag.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  isWishlistEmpty$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  productDetail?: Clothes[];
  selectedSize?: string;

  constructor(
    private wishlistService: WishlistService,
    private bagService: BagService
  ) {}

  ngOnInit(): void {
    this.getWishlistItems();
  }

  checkIsWishlistEmpty(): void {
    if (!this.productDetail || this.productDetail.length === 0) {
      this.isWishlistEmpty$.next(true);
    }
  }

  getWishlistItems(): void {
    this.wishlistService
      .getWishlist()
      .pipe(take(1))
      .subscribe((data) => {
        if (data?.length) {
          this.isWishlistEmpty$.next(false);
          this.productDetail = data;
        } else {
          this.checkIsWishlistEmpty();
        }
      });
  }

  selectSize(event: any): void {
    console.log(event);

    if (event.target) {
      this.selectedSize = event.target.value;
    }
  }

  addItem(productDetail: Clothes) {
    if (this.selectedSize) {
      const selectedProduct = {
        product: productDetail,
        selectedSize: this.selectedSize,
      };

      const existingItems = this.bagService.getBagItems();
      existingItems.push(selectedProduct);

      this.bagService.updateBagItems(existingItems);
    }
  }

  removeItem(item: Clothes) {
    this.wishlistService
      .removeFromWishlist(item)
      .pipe(take(1))
      .subscribe(() => {
        this.productDetail = this.productDetail?.filter(
          (productDetail) => productDetail !== item
        );

        this.checkIsWishlistEmpty();
      });
  }
}

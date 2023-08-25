import { BehaviorSubject, take } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Clothes } from 'src/app/features/clothes/interfaces/clothes.interface';
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
  wishlistItems?: Clothes[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.getWishlistItems();
  }

  checkIsWishlistEmpty() {
    if (!this.wishlistItems || this.wishlistItems.length === 0) {
      this.isWishlistEmpty$.next(true);
    }
  }

  getWishlistItems() {
    this.wishlistService
      .getWishlist()
      .pipe(take(1))
      .subscribe((data) => {
        if (data?.length) {
          this.isWishlistEmpty$.next(false);
          this.wishlistItems = data;
        } else {
          this.checkIsWishlistEmpty();
        }
      });
  }

  addItem() {
    console.log('click');
  }

  removeItem(item: Clothes) {
    this.wishlistService
      .removeFromWishlist(item)
      .pipe(take(1))
      .subscribe(() => {
        this.wishlistItems = this.wishlistItems?.filter(
          (wishlistItem) => wishlistItem !== item
        );

        this.checkIsWishlistEmpty();
      });
  }
}

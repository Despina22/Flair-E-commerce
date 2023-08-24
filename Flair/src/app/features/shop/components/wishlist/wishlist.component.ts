import { take } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Clothes } from 'src/app/features/clothes/interfaces/clothes.interface';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  isWishlistEmpty: boolean = true;
  wishlistItems?: Clothes[];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.getWishlistItems();
  }

  getWishlistItems() {
    this.wishlistService
      .getWishlist()
      .pipe(take(1))
      .subscribe((data) => {
        if (data?.length) {
          this.isWishlistEmpty = false;
          this.wishlistItems = data;
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
      });
  }
}

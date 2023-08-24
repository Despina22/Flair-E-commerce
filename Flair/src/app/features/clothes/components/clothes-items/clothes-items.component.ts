import { Component, OnInit } from '@angular/core';
import { Clothes } from '../../interfaces/clothes.interface';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../../services/clothes.service';
import { WishlistService } from 'src/app/features/shop/services/wishlist.service';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-clothes-items',
  templateUrl: './clothes-items.component.html',
  styleUrls: ['./clothes-items.component.scss'],
})
export class ClothesItemsComponent implements OnInit {
  products?: Clothes[];
  productsLength?: number;
  icon = 'favorite_border';

  constructor(
    private route: ActivatedRoute,
    private clothesService: ClothesService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const categoryId = +params['categoryId'];

      this.clothesService
        .getProductsByCategoryId(categoryId)
        .subscribe((data: Clothes[]) => {
          this.products = data;
          this.productsLength = this.products.length;
        });
    });
  }

  addToWishlist(product: Clothes) {
    this.wishlistService.addToWishlist(product).pipe(take(1)).subscribe();
  }
}

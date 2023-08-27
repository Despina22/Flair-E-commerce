import { Component, OnInit } from '@angular/core';
import { Clothes } from '../../interfaces/clothes.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { WishlistService } from 'src/app/features/shop/services/wishlist.service';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
})
export class ProductItemsComponent implements OnInit {
  products?: Clothes[];
  productsLength?: number;
  sortingOption: string = 'sort-by';

  constructor(
    private route: ActivatedRoute,
    private clothesService: ProductService,
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

  sortProducts() {
    switch (this.sortingOption) {
      case 'low-to-high':
        this.products?.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        this.products?.sort((a, b) => b.price - a.price);
        break;

      default:
        this.products?.sort((a, b) => a.id - b.id);
        break;
    }
  }
}

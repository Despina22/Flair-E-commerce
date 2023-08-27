import { Component, OnInit } from '@angular/core';
import { Clothes } from '../../interfaces/clothes.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { take } from 'rxjs';
import { BagService } from 'src/app/features/shop/services/bag.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  productId!: number;
  productDetail!: Clothes;
  selectedSize?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private bagService: BagService
  ) {}

  ngOnInit(): void {
    this.productId = +this.activatedRoute.snapshot.params['productId'];

    this.getProduct();
  }

  getProduct() {
    this.productService
      .getProductById(this.productId)
      .pipe(take(1))
      .subscribe((product) => (this.productDetail = product));
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addToBag() {
    if (this.selectedSize) {
      const selectedProduct = {
        product: this.productDetail,
        selectedSize: this.selectedSize,
      };

      const existingItems = this.bagService.getBagItems();
      existingItems.push(selectedProduct);

      this.bagService.updateBagItems(existingItems);
    }
  }
}

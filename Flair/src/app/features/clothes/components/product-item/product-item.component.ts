import { Component, OnInit } from '@angular/core';
import { Clothes } from '../../interfaces/clothes.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  productId!: number;
  productDetail!: Clothes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
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
}

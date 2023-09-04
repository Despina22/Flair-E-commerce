import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothes } from '../../clothes/interfaces/clothes.interface';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private readonly wishlistUrl = `${environment.baseApiUrl}wishlist`;

  constructor(private http: HttpClient) {}

  getWishlist(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(this.wishlistUrl);
  }

  addToWishlist(product: Clothes): Observable<Clothes> {
    return this.http.post<Clothes>(this.wishlistUrl, product);
  }

  removeFromWishlist(product: Clothes): Observable<Clothes> {
    return this.http.delete<Clothes>(`${this.wishlistUrl}/${product.id}`);
  }
}

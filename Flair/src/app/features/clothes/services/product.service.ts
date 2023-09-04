import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothes } from '../interfaces/clothes.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly clothesUrl: string = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${this.clothesUrl}products`);
  }

  getProductsByCategoryId(categoryId: number): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(
      `${this.clothesUrl}products?categoryId=${categoryId}`
    );
  }

  getProductById(id: number): Observable<Clothes> {
    return this.http.get<Clothes>(`${this.clothesUrl}products/${id}`);
  }
}

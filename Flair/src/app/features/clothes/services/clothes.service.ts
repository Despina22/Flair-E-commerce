import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clothes } from '../interfaces/clothes.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private readonly clothesUrl: string = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${this.clothesUrl}products`);
  }

  getProductsByCategoryId(categoryId: number): Observable<Clothes[]> {
    const categories$ = this.http.get<Category[]>(`${this.clothesUrl}category`);
    const products$ = this.http.get<Clothes[]>(`${this.clothesUrl}products`);

    return forkJoin<[Category[], Clothes[]]>([categories$, products$]).pipe(
      map(([categories, products]) => {
        const category = categories.find((cat) => cat.id === categoryId);
        console.log(category);

        if (category) {
          return products.filter(
            (product) => product.categoryId === category.id
          );
        } else {
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return [];
      })
    );
  }

  getProductsById(id: number): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`${this.clothesUrl}products/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BagService {
  private bagItemsKey = 'bagItems';
  private bagItemsChanged: Subject<void> = new Subject<void>();

  constructor() {}

  updateBagItems(newItems: any[]): void {
    localStorage.setItem(this.bagItemsKey, JSON.stringify(newItems));
    this.bagItemsChanged.next();
  }

  getBagItems(): any[] {
    const items = localStorage.getItem(this.bagItemsKey);
    return items ? JSON.parse(items) : [];
  }

  deleteBagItems(): any {
    localStorage.removeItem(this.bagItemsKey);
  }

  bagItemsChanged$: Observable<void> = this.bagItemsChanged.asObservable();
}

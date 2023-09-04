import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEssentialsComponent } from './product-essentials.component';

describe('ProductEssentialsComponent', () => {
  let component: ProductEssentialsComponent;
  let fixture: ComponentFixture<ProductEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductEssentialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFocusComponent } from './products-focus.component';

describe('ProductsFocusComponent', () => {
  let component: ProductsFocusComponent;
  let fixture: ComponentFixture<ProductsFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsFocusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

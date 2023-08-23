import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesItemsComponent } from './clothes-items.component';

describe('ClothesItemsComponent', () => {
  let component: ClothesItemsComponent;
  let fixture: ComponentFixture<ClothesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

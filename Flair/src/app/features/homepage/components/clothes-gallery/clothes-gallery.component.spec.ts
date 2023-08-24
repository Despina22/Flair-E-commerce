import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesGalleryComponent } from './clothes-gallery.component';

describe('ClothesGalleryComponent', () => {
  let component: ClothesGalleryComponent;
  let fixture: ComponentFixture<ClothesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

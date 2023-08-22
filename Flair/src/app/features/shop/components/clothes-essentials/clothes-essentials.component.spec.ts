import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesEssentialsComponent } from './clothes-essentials.component';

describe('ClothesEssentialsComponent', () => {
  let component: ClothesEssentialsComponent;
  let fixture: ComponentFixture<ClothesEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesEssentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

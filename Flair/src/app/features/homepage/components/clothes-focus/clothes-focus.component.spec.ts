import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesFocusComponent } from './clothes-focus.component';

describe('ClothesFocusComponent', () => {
  let component: ClothesFocusComponent;
  let fixture: ComponentFixture<ClothesFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

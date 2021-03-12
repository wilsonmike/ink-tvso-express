import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskmarketComponent } from './maskmarket.component';

describe('MaskmarketComponent', () => {
  let component: MaskmarketComponent;
  let fixture: ComponentFixture<MaskmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

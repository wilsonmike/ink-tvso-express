import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskmarketmarchComponent } from './maskmarketmarch.component';

describe('MaskmarketmarchComponent', () => {
  let component: MaskmarketmarchComponent;
  let fixture: ComponentFixture<MaskmarketmarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskmarketmarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskmarketmarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

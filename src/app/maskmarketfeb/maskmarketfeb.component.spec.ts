import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskmarketfebComponent } from './maskmarketfeb.component';

describe('MaskmarketfebComponent', () => {
  let component: MaskmarketfebComponent;
  let fixture: ComponentFixture<MaskmarketfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskmarketfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskmarketfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

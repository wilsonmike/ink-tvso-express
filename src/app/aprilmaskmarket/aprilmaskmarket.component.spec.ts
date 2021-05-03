import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilmaskmarketComponent } from './aprilmaskmarket.component';

describe('AprilmaskmarketComponent', () => {
  let component: AprilmaskmarketComponent;
  let fixture: ComponentFixture<AprilmaskmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprilmaskmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilmaskmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

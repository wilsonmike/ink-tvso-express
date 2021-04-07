import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchtotalComponent } from './marchtotal.component';

describe('MarchtotalComponent', () => {
  let component: MarchtotalComponent;
  let fixture: ComponentFixture<MarchtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

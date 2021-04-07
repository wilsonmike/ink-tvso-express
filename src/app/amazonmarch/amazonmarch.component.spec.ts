import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonmarchComponent } from './amazonmarch.component';

describe('AmazonmarchComponent', () => {
  let component: AmazonmarchComponent;
  let fixture: ComponentFixture<AmazonmarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonmarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonmarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

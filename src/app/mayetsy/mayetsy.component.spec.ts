import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayetsyComponent } from './mayetsy.component';

describe('MayetsyComponent', () => {
  let component: MayetsyComponent;
  let fixture: ComponentFixture<MayetsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayetsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayetsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

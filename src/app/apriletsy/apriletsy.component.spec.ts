import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApriletsyComponent } from './apriletsy.component';

describe('ApriletsyComponent', () => {
  let component: ApriletsyComponent;
  let fixture: ComponentFixture<ApriletsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApriletsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApriletsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

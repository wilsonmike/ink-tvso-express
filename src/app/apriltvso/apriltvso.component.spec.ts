import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApriltvsoComponent } from './apriltvso.component';

describe('ApriltvsoComponent', () => {
  let component: ApriltvsoComponent;
  let fixture: ComponentFixture<ApriltvsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApriltvsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApriltvsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

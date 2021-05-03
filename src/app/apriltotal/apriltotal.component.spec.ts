import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApriltotalComponent } from './apriltotal.component';

describe('ApriltotalComponent', () => {
  let component: ApriltotalComponent;
  let fixture: ComponentFixture<ApriltotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApriltotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApriltotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualfebComponent } from './manualfeb.component';

describe('ManualfebComponent', () => {
  let component: ManualfebComponent;
  let fixture: ComponentFixture<ManualfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

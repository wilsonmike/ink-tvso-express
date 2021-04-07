import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualordersmarchComponent } from './manualordersmarch.component';

describe('ManualordersmarchComponent', () => {
  let component: ManualordersmarchComponent;
  let fixture: ComponentFixture<ManualordersmarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualordersmarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualordersmarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

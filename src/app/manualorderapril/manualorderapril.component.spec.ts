import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualorderaprilComponent } from './manualorderapril.component';

describe('ManualorderaprilComponent', () => {
  let component: ManualorderaprilComponent;
  let fixture: ComponentFixture<ManualorderaprilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualorderaprilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualorderaprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

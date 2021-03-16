import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcsfebComponent } from './ucsfeb.component';

describe('UcsfebComponent', () => {
  let component: UcsfebComponent;
  let fixture: ComponentFixture<UcsfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcsfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcsfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

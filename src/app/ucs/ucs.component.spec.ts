import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcsComponent } from './ucs.component';

describe('UcsComponent', () => {
  let component: UcsComponent;
  let fixture: ComponentFixture<UcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

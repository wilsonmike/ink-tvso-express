import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebtotalComponent } from './febtotal.component';

describe('FebtotalComponent', () => {
  let component: FebtotalComponent;
  let fixture: ComponentFixture<FebtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FebtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

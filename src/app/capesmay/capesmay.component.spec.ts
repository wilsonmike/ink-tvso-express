import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapesmayComponent } from './capesmay.component';

describe('CapesmayComponent', () => {
  let component: CapesmayComponent;
  let fixture: ComponentFixture<CapesmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapesmayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapesmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

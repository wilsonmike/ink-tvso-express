import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualmayComponent } from './manualmay.component';

describe('ManualmayComponent', () => {
  let component: ManualmayComponent;
  let fixture: ComponentFixture<ManualmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualmayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

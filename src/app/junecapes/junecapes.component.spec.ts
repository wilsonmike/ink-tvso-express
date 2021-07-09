import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunecapesComponent } from './junecapes.component';

describe('JunecapesComponent', () => {
  let component: JunecapesComponent;
  let fixture: ComponentFixture<JunecapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunecapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunecapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

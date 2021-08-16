import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulydoneComponent } from './julydone.component';

describe('JulydoneComponent', () => {
  let component: JulydoneComponent;
  let fixture: ComponentFixture<JulydoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulydoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JulydoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuneetsyComponent } from './juneetsy.component';

describe('JuneetsyComponent', () => {
  let component: JuneetsyComponent;
  let fixture: ComponentFixture<JuneetsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuneetsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuneetsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

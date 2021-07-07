import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunetotalComponent } from './junetotal.component';

describe('JunetotalComponent', () => {
  let component: JunetotalComponent;
  let fixture: ComponentFixture<JunetotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunetotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunetotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

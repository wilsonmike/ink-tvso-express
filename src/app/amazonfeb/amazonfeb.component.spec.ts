import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonfebComponent } from './amazonfeb.component';

describe('AmazonfebComponent', () => {
  let component: AmazonfebComponent;
  let fixture: ComponentFixture<AmazonfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

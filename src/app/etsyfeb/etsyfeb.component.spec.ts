import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsyfebComponent } from './etsyfeb.component';

describe('EtsyfebComponent', () => {
  let component: EtsyfebComponent;
  let fixture: ComponentFixture<EtsyfebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtsyfebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsyfebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

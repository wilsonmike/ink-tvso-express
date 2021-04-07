import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsymarchComponent } from './etsymarch.component';

describe('EtsymarchComponent', () => {
  let component: EtsymarchComponent;
  let fixture: ComponentFixture<EtsymarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtsymarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsymarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

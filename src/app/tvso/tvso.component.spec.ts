import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsoComponent } from './tvso.component';

describe('TvsoComponent', () => {
  let component: TvsoComponent;
  let fixture: ComponentFixture<TvsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

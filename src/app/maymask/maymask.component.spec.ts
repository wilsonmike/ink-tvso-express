import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaymaskComponent } from './maymask.component';

describe('MaymaskComponent', () => {
  let component: MaymaskComponent;
  let fixture: ComponentFixture<MaymaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaymaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaymaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

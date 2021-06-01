import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaytotalComponent } from './maytotal.component';

describe('MaytotalComponent', () => {
  let component: MaytotalComponent;
  let fixture: ComponentFixture<MaytotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaytotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaytotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

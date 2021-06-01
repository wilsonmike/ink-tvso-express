import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaytvsoComponent } from './maytvso.component';

describe('MaytvsoComponent', () => {
  let component: MaytvsoComponent;
  let fixture: ComponentFixture<MaytvsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaytvsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaytvsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

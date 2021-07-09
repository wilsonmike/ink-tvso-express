import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunetvsoComponent } from './junetvso.component';

describe('JunetvsoComponent', () => {
  let component: JunetvsoComponent;
  let fixture: ComponentFixture<JunetvsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunetvsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunetvsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

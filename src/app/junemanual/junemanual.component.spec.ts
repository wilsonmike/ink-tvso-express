import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunemanualComponent } from './junemanual.component';

describe('JunemanualComponent', () => {
  let component: JunemanualComponent;
  let fixture: ComponentFixture<JunemanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunemanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunemanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

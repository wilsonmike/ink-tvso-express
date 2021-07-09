import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuneamazonComponent } from './juneamazon.component';

describe('JuneamazonComponent', () => {
  let component: JuneamazonComponent;
  let fixture: ComponentFixture<JuneamazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuneamazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuneamazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

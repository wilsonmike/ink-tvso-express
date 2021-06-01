import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayamazonComponent } from './mayamazon.component';

describe('MayamazonComponent', () => {
  let component: MayamazonComponent;
  let fixture: ComponentFixture<MayamazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayamazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayamazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

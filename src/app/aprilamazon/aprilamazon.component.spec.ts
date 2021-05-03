import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilamazonComponent } from './aprilamazon.component';

describe('AprilamazonComponent', () => {
  let component: AprilamazonComponent;
  let fixture: ComponentFixture<AprilamazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprilamazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilamazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

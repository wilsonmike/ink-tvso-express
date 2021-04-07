import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeagentmarchComponent } from './costumeagentmarch.component';

describe('CostumeagentmarchComponent', () => {
  let component: CostumeagentmarchComponent;
  let fixture: ComponentFixture<CostumeagentmarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeagentmarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeagentmarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

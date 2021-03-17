import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeagentComponent } from './costumeagent.component';

describe('CostumeagentComponent', () => {
  let component: CostumeagentComponent;
  let fixture: ComponentFixture<CostumeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

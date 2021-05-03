import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilcostumeagentComponent } from './aprilcostumeagent.component';

describe('AprilcostumeagentComponent', () => {
  let component: AprilcostumeagentComponent;
  let fixture: ComponentFixture<AprilcostumeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprilcostumeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilcostumeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

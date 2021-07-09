import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunecostumeagentComponent } from './junecostumeagent.component';

describe('JunecostumeagentComponent', () => {
  let component: JunecostumeagentComponent;
  let fixture: ComponentFixture<JunecostumeagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunecostumeagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunecostumeagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

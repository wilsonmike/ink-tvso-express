import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunemaskmarketComponent } from './junemaskmarket.component';

describe('JunemaskmarketComponent', () => {
  let component: JunemaskmarketComponent;
  let fixture: ComponentFixture<JunemaskmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunemaskmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunemaskmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

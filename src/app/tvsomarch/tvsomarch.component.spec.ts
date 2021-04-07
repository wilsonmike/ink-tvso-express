import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsomarchComponent } from './tvsomarch.component';

describe('TvsomarchComponent', () => {
  let component: TvsomarchComponent;
  let fixture: ComponentFixture<TvsomarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsomarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsomarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

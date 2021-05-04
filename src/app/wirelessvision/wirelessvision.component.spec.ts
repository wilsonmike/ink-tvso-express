import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessvisionComponent } from './wirelessvision.component';

describe('WirelessvisionComponent', () => {
  let component: WirelessvisionComponent;
  let fixture: ComponentFixture<WirelessvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessvisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

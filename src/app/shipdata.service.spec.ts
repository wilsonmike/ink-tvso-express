import { TestBed } from '@angular/core/testing';

import { ShipdataService } from './shipdata.service';

describe('ShipdataService', () => {
  let service: ShipdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

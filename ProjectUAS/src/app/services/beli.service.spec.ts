import { TestBed } from '@angular/core/testing';

import { BeliService } from './beli.service';

describe('BeliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeliService = TestBed.get(BeliService);
    expect(service).toBeTruthy();
  });
});

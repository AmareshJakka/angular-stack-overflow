import { TestBed } from '@angular/core/testing';

import { StackoverflowService } from './stackoverflow.service';

describe('StackoverflowService', () => {
  let service: StackoverflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackoverflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

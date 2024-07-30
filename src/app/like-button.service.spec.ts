import { TestBed } from '@angular/core/testing';

import { LikeButtonService } from './like-button.service';

describe('LikeButtonService', () => {
  let service: LikeButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

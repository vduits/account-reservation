import { TestBed } from '@angular/core/testing';

import { UserModificationService } from './user-modification.service';

describe('UserModificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserModificationService = TestBed.get(UserModificationService);
    expect(service).toBeTruthy();
  });
});

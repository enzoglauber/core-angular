import { TestBed } from '@angular/core/testing';

import { CoreAngularService } from './core-angular.service';

describe('CoreAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreAngularService = TestBed.get(CoreAngularService);
    expect(service).toBeTruthy();
  });
});

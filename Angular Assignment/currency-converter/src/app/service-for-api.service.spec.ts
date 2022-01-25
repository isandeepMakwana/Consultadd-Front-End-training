import { TestBed } from '@angular/core/testing';

import { ServiceForApiService } from './service-for-api.service';

describe('ServiceForApiService', () => {
  let service: ServiceForApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

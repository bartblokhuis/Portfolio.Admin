import { TestBed } from '@angular/core/testing';

import { SeoSettingsService } from './seo-settings.service';

describe('SeoSettingsService', () => {
  let service: SeoSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

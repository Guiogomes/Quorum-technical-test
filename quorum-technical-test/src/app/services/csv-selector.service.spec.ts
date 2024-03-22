import { TestBed } from '@angular/core/testing';

import { CsvSelectorService } from './csv-selector.service';

describe('CsvSelectorService', () => {
  let service: CsvSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

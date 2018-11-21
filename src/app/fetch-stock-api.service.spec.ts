import { TestBed, inject } from '@angular/core/testing';

import { FetchStockApiService } from './fetch-stock-api.service';

describe('FetchStockApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchStockApiService]
    });
  });

  it('should be created', inject([FetchStockApiService], (service: FetchStockApiService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ConektaService } from './conekta.service';

describe('ConektaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConektaService]
    });
  });

  it('should be created', inject([ConektaService], (service: ConektaService) => {
    expect(service).toBeTruthy();
  }));
});

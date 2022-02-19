import { TestBed } from '@angular/core/testing';

import { CagnottesService } from './cagnottes.service';

describe('CagnottesService', () => {
  let service: CagnottesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CagnottesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

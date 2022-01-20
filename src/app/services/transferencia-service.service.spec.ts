/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferenciaServiceService } from './transferencia-service.service';

describe('Service: TransferenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferenciaServiceService]
    });
  });

  it('should ...', inject([TransferenciaServiceService], (service: TransferenciaServiceService) => {
    expect(service).toBeTruthy();
  }));
});

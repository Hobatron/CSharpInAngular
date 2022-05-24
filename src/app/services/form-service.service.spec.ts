import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormServiceService } from './form-service.service';

describe('FormServiceService', () => {
  let service: FormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder]
    });
    service = TestBed.inject(FormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

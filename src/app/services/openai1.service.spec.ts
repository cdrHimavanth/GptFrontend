import { TestBed } from '@angular/core/testing';

import { Openai1Service } from './openai1.service';

describe('Openai1Service', () => {
  let service: Openai1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openai1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

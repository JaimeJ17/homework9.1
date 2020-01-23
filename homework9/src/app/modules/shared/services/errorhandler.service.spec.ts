import { TestBed } from '@angular/core/testing';

import { ErrorhandlerService } from './errorhandler.service';

fdescribe('ErrorhandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorhandlerService = TestBed.get(ErrorhandlerService);
    expect(service).toBeTruthy();
  });

  it('pitch error should be called', () => {
    const service: ErrorhandlerService = TestBed.get(ErrorhandlerService);
    let spy = spyOn(service, 'pitchError');
    service.pitchError({token: '123'});
    expect(spy).toHaveBeenCalled();
  });

  it('subscribe should return something', () => {
    const service: ErrorhandlerService = TestBed.get(ErrorhandlerService);
    service.pitchError({token: '123'});
    let value: any;
    service.error$.subscribe( data =>  value = data);
    expect(value).toBeTruthy();
  });
});

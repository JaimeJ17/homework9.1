import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { ConnectorService } from './connector.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

class FakeStorage  {
  loadfile(identifier: string) {
    return "123";
  }
}

fdescribe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide : ConnectorService, useClass: FakeStorage }]
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });

  it('method should exist', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    const spy = spyOn(service, 'intercept');
    let value: HttpRequest<any>;
    let handler: HttpHandler;
    service.intercept(value, handler);
    expect(spy).toHaveBeenCalled();
  });
});

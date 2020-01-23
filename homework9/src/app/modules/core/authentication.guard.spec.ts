import { LocalstorageService } from './../shared/services/localstorage.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';

class RouterStub {
  navigate() {}
}

class FakeStorage  {
  value = false;

  tokenStatus(identifier: string) {
    this.value = !this.value;
    return this.value;
  }
}


fdescribe('AuthenticationGuard', () => {
  let guardService: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard, {provide: Router, useClass: RouterStub}, {provide: LocalstorageService, useClass: FakeStorage}, ]
    });
  });
  beforeEach(() => {
    guardService = TestBed.get(AuthenticationGuard);
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('guard should not activate due to user not logged', () => {
    guardService.canActivate();
    expect(guardService.canActivate()).toBeTruthy();
  });

  it('guard should activate due to user logged', () => {
    expect(guardService.canActivate()).toBeFalsy();
  });

  it('guard should redirect to home', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    guardService.canActivate();
    guardService.canActivate();
    expect(spy) .toHaveBeenCalledWith(['home']);
  });
});

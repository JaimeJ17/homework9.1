import { LocalstorageService } from './../shared/services/localstorage.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { Router } from '@angular/router';

class RouterStub {
  navigate() {}
}
let fakeToken = false;
class FakeStorage  {
  tokenStatus(identifier: string) {
    return fakeToken;
  }

  changeStatus() {
    fakeToken = !fakeToken;
  }
}


fdescribe('AuthenticationGuard', () => {
  let guardService: AuthenticationGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard, {provide: Router, useClass: RouterStub}, {provide: LocalstorageService, useClass: FakeStorage},]
    });
  });
  beforeEach(() => {
    guardService = TestBed.get(AuthenticationGuard);
  })

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('guard should not activate due to user not logged', () => {
    expect(guardService.canActivate()).toBeTruthy();
  });

  it('guard should  activate due to user logged', () => {
    let storage = new FakeStorage();
    storage.changeStatus();
    storage.changeStatus();
    expect(guardService.canActivate()).toBeFalsy();
  });



});

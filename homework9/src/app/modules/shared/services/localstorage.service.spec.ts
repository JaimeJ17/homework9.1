import { TestBed, tick, async, fakeAsync } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

fdescribe('LocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    let value: string;
    const fakeStorage = {
      setItem(identifier: string , data: string) {
        value = data;
      },

      getItem(identifier: string) {
        return value;
      },

      removeItem(identifier: string) {
        value = null;
      },
    };
    spyOn(localStorage, 'setItem').and.callFake(fakeStorage.setItem);
    spyOn(localStorage, 'getItem').and.callFake(fakeStorage.getItem);
    spyOn(localStorage, 'removeItem').and.callFake(fakeStorage.removeItem);
  });

  it('should be created', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    expect(service).toBeTruthy();
  });

  it('savefile should be called', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    const spy = spyOn(service, 'savefile');
    service.savefile('nothing', 'test');
    expect(spy).toHaveBeenCalled();
  });

  it('loadfile should be called', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    const spy = spyOn(service, 'loadfile');
    service.loadfile('test');
    expect(spy).toHaveBeenCalled();
  });


  it('loadfile should return "nothing"', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    service.savefile('nothing', 'test');
    const value = service.loadfile('test');
    expect(value).toBe('nothing');
  });

  it('remove should be called when activated', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    const spy = spyOn(service, 'removefile');
    service.removefile('nothing');
    expect(spy).toHaveBeenCalled();
  });

  it('tokenstatus should return true', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    service.savefile('nothing', 'test');
    const value = service.tokenStatus();
    expect(value).toBe(true);
  });

  it('tokenstatus should return false', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    service.savefile('nothing', 'test');
    service.removefile('test');
    const value = service.tokenStatus();
    expect(value).toBe(false);
  });

  it('loadfile should return null', () => {
    const service: LocalstorageService = TestBed.get(LocalstorageService);
    service.savefile('nothing', 'not');
    service.removefile('not');
    const value = service.loadfile('nothing');
    expect(value).toBe(null);
  });
});

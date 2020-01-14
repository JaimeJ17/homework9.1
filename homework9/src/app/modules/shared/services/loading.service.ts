import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  changeState(newState: boolean) {
    this.loading.next(newState);
  }

  get loading$() {
    return this.loading.asObservable();
  }
}

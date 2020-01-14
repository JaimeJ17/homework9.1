import { Response } from 'src/app/modules/shared/interfaces/response.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {
  error: BehaviorSubject<Response | boolean> = new BehaviorSubject(null);

  constructor() { }

  pitchError(catchedError: Response) {
    this.error.next(catchedError);
  }

  get error$() {
    return this.error.asObservable();
  }
}

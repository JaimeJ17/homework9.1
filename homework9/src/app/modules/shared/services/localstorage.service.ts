import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  savefile(data: string, identifier: string) {
    localStorage.setItem(identifier, JSON.stringify(data));
  }

  loadfile(identifier: string) {
    const retrievedObject = JSON.parse(localStorage.getItem(identifier));
    return retrievedObject ? retrievedObject : [] ;
  }

  removefile(identifier: string){
    localStorage.removeItem(identifier);
  }

  tokenStatus() {
    return !!localStorage.getItem('token');
  }
}

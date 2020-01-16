import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogOutAction } from './../../../../store/actions/login.action';
import { IAppState } from 'src/app/store/state/app.state';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventEmitter } from '@angular/core';
import { getEmail } from '../../../../store/selectors/store.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit , OnDestroy{
  @Output() closeProfile: EventEmitter<any> = new EventEmitter();

  user$: Observable<string> = this.store.select(getEmail);

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(){

    }

  logOut() {
    this.closeProfile.emit(null);
    this.store.dispatch(new LogOutAction());
    this.router.navigate(['/home']);
  }

  close(){
    this.closeProfile.emit(null);
  }
}

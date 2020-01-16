import { getUser } from './../../../../store/selectors/store.selectors';
import { User } from 'src/app/modules/shared/interfaces/user.interface';
import { Observable } from 'rxjs';
import { LogOutAction } from './../../../../store/actions/login.action';
import { IAppState } from 'src/app/store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<string> = this.store.select(state => state.products.login.user.email);

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  logOut() {
    this.store.dispatch(new LogOutAction());
  }
}

import { getLoginToken } from './../../../../store/selectors/store.selectors';
import { Observable } from 'rxjs';
import { GetProductsAction, SearchProductsActions } from './../../../../store/actions/product.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCategoryAction } from 'src/app/store/actions/category.action';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLogged$: Observable<boolean> = this.store.select(getLoginToken);

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetCategoryAction());
    this.store.dispatch(new GetProductsAction());
  }

  search(searchBar: HTMLButtonElement){
    this.store.dispatch(new SearchProductsActions(searchBar.value));
  }


}

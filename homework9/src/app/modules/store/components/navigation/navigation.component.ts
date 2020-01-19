import { ToggleCategoryAction, GetCategoriesAction } from './../../../../store/actions/category.action';
import { getLoginToken, getCartLenght } from './../../../../store/selectors/store.selectors';
import { Observable } from 'rxjs';
import { GetProductsAction, SearchProductsActions } from './../../../../store/actions/product.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCategoryAction } from 'src/app/store/actions/category.action';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLogged$: Observable<boolean> = this.store.select(getLoginToken);
  cartLength$: Observable<number> = this.store.select(getCartLenght);
  displayUser = false;


  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new GetProductsAction());
    this.store.dispatch(new GetCategoriesAction());
  }

  search(searchBar: HTMLButtonElement){
    this.store.dispatch(new SearchProductsActions(searchBar.value));
  }

  toggle() {
    this.store.dispatch(new ToggleCategoryAction());
  }

  changeProfile() {
    this.displayUser = !this.displayUser;
  }
}

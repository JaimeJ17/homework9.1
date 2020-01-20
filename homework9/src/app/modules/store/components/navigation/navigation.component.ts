import { MatInput } from '@angular/material/input';
import { ToggleCategoryAction, GetCategoriesAction } from './../../../../store/actions/category.action';
import { getLoginToken, getCartLenght, getError } from './../../../../store/selectors/store.selectors';
import { Observable } from 'rxjs';
import { GetProductsAction, SearchProductsActions, FilterProductNameAction } from './../../../../store/actions/product.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLogged$: Observable<boolean> = this.store.select(getLoginToken);
  cartLength$: Observable<number> = this.store.select(getCartLenght);
  displayUser = false;


  constructor(private store: Store<any>, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.store.dispatch(new GetProductsAction());
    this.store.dispatch(new GetCategoriesAction());
    this.store.select(getError).subscribe(
      error => {
        if (error.length > 0) {
          this.snackBar.open(error[0] ? error[0].message : 'Something Happen', 'Error', {
            duration: 2000,
          });
        }
      }
    );
  }

  search(searchBar: MatInput) {
    this.store.dispatch(new SearchProductsActions(searchBar.value));
    this.store.dispatch(new FilterProductNameAction(searchBar.value));
  }

  toggle() {
    this.store.dispatch(new ToggleCategoryAction());
  }

  changeProfile() {
    this.displayUser = !this.displayUser;
  }
}

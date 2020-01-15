import { AddCartAction, RemoveFromCartAction } from './../../../../store/actions/cart.action';
import { GetProductsPerCategoryAction, SearchProductsActions } from './../../../../store/actions/product.actions';
import { GetCategoryAction } from './../../../../store/actions/category.action';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetProductsAction } from '../../../../store/actions/product.actions';
import { ConnectorService } from '../../../shared/services/connector.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  obs$: Observable<IAppState>;
  aaa;
  constructor(private store: Store<IAppState>, private connector: ConnectorService) { }

  ngOnInit() {
    this.store.dispatch(new GetCategoryAction());
    this.store.subscribe((data) =>
      console.log(data));
  }

  call() {
    this.connector.login({email: 'trainee3@example.com', password: 'Trainee$3'})
      .subscribe( data => console.log(data));
    this.store.dispatch(new GetProductsAction());

    this.store.dispatch(new AddCartAction({ id: 'a', quantity: 'aa', product_variant_id: 'aa' }));
    this.store.dispatch(new AddCartAction({ id: 'a', quantity: 'aa', product_variant_id: 'bb' }));
    this.store.dispatch(new RemoveFromCartAction('aa'));
    setTimeout(() => {
      this.store.dispatch(new SearchProductsActions('se'));
    }, 5000);

    setTimeout(() => {
      this.store.dispatch(new SearchProductsActions('fa'));
    }, 8000);
  }
}

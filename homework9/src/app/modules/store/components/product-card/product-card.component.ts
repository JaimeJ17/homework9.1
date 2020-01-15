import { GetProductsPerCategoryAction } from './../../../../store/actions/product.actions';
import { GetCategoryAction } from './../../../../store/actions/category.action';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetProductsAction } from '../../../../store/actions/product.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  obs$: Observable<IAppState>;
  aaa;
  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.aaa = this.store.select(store => store.products).subscribe((data) =>
      console.log(data));
  }

  call() {
    this.store.dispatch(new GetProductsAction());
    this.store.dispatch(new GetCategoryAction());

    setTimeout(() => {
      this.store.dispatch(new GetProductsPerCategoryAction('kids-books'));
    }, 5000);

    setTimeout(() => {
      this.store.dispatch(new GetProductsPerCategoryAction('sports-movies'));
    }, 8000);
  }
}

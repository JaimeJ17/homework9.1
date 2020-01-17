import { getProducts, getLoginToken } from './../../../../store/selectors/store.selectors';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { GetProductAction, LikeProductAction } from '../../../../store/actions/product.actions';
import { Observable } from 'rxjs';
import { AddCartAction } from '../../../../store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products: Product[];
  canLike$: Observable<boolean> = this.store.select(getLoginToken);

  constructor(private store: Store<IAppState>,  private router: Router) { }

  ngOnInit() {
    this.store.select(getProducts)
      .subscribe(productList =>  this.products = productList);
  }

  openProduct(id: number) {
    this.store.dispatch(new GetProductAction(id));
    this.router.navigate(['product']);
  }

  addCart(id: number, amount: number) {
    const cartId = new Date();
    this.store.dispatch(new AddCartAction({id: cartId.getTime(), product_variant_id: id, quantity: amount}));
  }

  likeProduct(id: number, like: number) {
    this.store.dispatch(new LikeProductAction({ kind: like, product_id: id }));
  }
}

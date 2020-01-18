import { Router } from '@angular/router';
import { getLoginToken } from './../../../../store/selectors/store.selectors';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { getProduct } from '../../../../store/selectors/store.selectors';
import { LikeProductAction } from '../../../../store/actions/product.actions';
import { MatInput } from '@angular/material/input';
import { AddCartAction } from 'src/app/store/actions/cart.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  canLike$: Observable<boolean> = this.store.select(getLoginToken);

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
    this.store.select(getProduct).subscribe(data => (this.product = data));
    this.likeProduct(25, 1);
  }

  add(input: MatInput) {
    Number(input.value) === this.product.master.stock
      ? (input.value = input.value)
      : (input.value = (Number(input.value) + 1).toString());
  }

  remove(input: MatInput) {
    Number(input.value) === this.product.master.stock
      ? (input.value = '0')
      : (input.value = (Number(input.value) - 1).toString());
  }

  likeProduct(id: number, like: number) {
    this.store.dispatch(new LikeProductAction({ kind: like, product_id: id }));
  }

  addCart(id: number, input: MatInput, name: string, url: string, price: string
  ) {
    const amount = Number(input.value);
    const cartId = new Date();
    this.store.dispatch(
      new AddCartAction({
        id: cartId.getTime(),
        product_variant_id: id,
        quantity: amount,
        price: price,
        url: url,
        name: name
      })
    );
  }
}

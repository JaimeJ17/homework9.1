import { Router } from '@angular/router';
import { getLoginToken } from './../../../../store/selectors/store.selectors';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { getProduct } from '../../../../store/selectors/store.selectors';
import { LikeProductAction } from '../../../../store/actions/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  canLike$: Observable<boolean> = this.store.select(getLoginToken);

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.select(getProduct).subscribe(data => (this.product = data));
    console.log('aaaa');
    this.likeProduct(25, 1);
  }

  add(input: HTMLInputElement) {
    input.valueAsNumber === this.product.master.stock
      ? (input.valueAsNumber = input.valueAsNumber)
      : (input.valueAsNumber = input.valueAsNumber + 1);
  }

  remove(input: HTMLInputElement) {
    input.valueAsNumber === 0
      ? (input.valueAsNumber = 0)
      : (input.valueAsNumber = input.valueAsNumber - 1);
  }

  likeProduct(id: number, like: number) {
    console.log(id, like);
    this.store.dispatch(new LikeProductAction({ kind: like, product_id: id }));
  }
}

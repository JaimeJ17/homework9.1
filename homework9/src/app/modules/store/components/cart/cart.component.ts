import { MatInput } from '@angular/material/input';
import { AddTotalCartAction } from './../../../../store/actions/cart.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { CartItems } from '../../../shared/interfaces/cart-items.interface';
import { getCartItems } from 'src/app/store/selectors/store.selectors';
import { RemoveFromCartAction, ModifyCartAction, RemoveTotalCartAction } from '../../../../store/actions/cart.action';
import { Observable } from 'rxjs';
import { getCartTotal } from '../../../../store/selectors/store.selectors';
import * as fromCart from 'src/app/store/reducers/my-Cart.reducer';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartList: CartItems[];
  total$: Observable<number> = this.store.select(getCartTotal);

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select(fromCart.selectAll).subscribe(
      data => {
        this.cartList = data;
      }
    );
  }

  deleteItem(id: number, price: string, amount: number) {
    this.store.dispatch(new RemoveTotalCartAction(amount * Number(price)));
    this.store.dispatch(new RemoveFromCartAction(id));
  }

  modifyItem(id: number, oldAmount: number, input: MatInput, price: string) {
    const amount = Number(input.value);
    this.store.dispatch(new RemoveTotalCartAction(oldAmount * Number(price)));
    this.store.dispatch(new AddTotalCartAction(amount * Number(price)))
    this.store.dispatch(new ModifyCartAction({ id: id, quantity: amount }));
  }

  add(input: MatInput, id: number, price: string, amount: number) {
    Number(input.value) === 99
      ? (input.value = input.value)
      : (input.value = (Number(input.value) + 1).toString());
    this.modifyItem(id, amount, input, price);
  }

  remove(input: MatInput, id: number, price: string, amount: number) {
    Number(input.value) === 1
      ? (input.value = '1')
      : (input.value = (Number(input.value) - 1).toString());
    this.modifyItem(id, amount, input, price);
  }


  ngOnDestroy() {
  }
}

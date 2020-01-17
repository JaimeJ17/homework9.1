import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { CartItems } from '../../../shared/interfaces/cart-items.interface';
import { getCartItems } from 'src/app/store/selectors/store.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartList: CartItems[];

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.select(getCartItems).subscribe(
      data => {
        this.cartList = data;
      }
    );
  }

  ngOnDestroy() {
  }
}

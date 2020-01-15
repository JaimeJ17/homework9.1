import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store/state/app.state';
import { getProduct } from '../../../../store/selectors/store.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  $product: Observable<Product>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.$product = this.store.select(getProduct);
  }

}

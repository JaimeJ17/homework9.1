import { getProducts } from './../../../../store/selectors/store.selectors';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  products: Product[];

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.select(getProducts)
      .subscribe(productList =>  this.products = productList);
  }

  call() {
  }

  back(){
  }
}

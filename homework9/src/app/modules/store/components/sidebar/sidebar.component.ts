import { GetProductsPerCategoryAction } from './../../../../store/actions/product.actions';
import { Category } from './../../../shared/interfaces/category.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Category[];



  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.subscribe((data) =>
      this.categories = data.products.categories);
  }

  filterProducts(slug: string) {
    this.store.dispatch(new GetProductsPerCategoryAction(slug));
  }
}

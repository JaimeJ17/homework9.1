import { GetProductsPerCategoryAction, FilterProductCategoryAction } from './../../../../store/actions/product.actions';
import { Category } from './../../../shared/interfaces/category.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCateogry from 'src/app/store/reducers/my-Category.reducer';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories$: Observable<Category[]> = this.store.select(fromCateogry.selectAll);
  change: boolean;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  filterProducts(slug: string, name: string) {
    this.store.dispatch(new GetProductsPerCategoryAction(slug));
    this.store.dispatch(new FilterProductCategoryAction(name));
  }
}

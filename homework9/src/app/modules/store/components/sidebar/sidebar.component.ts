import { getCategories } from './../../../../store/selectors/store.selectors';
import { GetProductsPerCategoryAction } from './../../../../store/actions/product.actions';
import { Category } from './../../../shared/interfaces/category.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Observable } from 'rxjs';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { MatDrawer } from '@angular/material/sidenav';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories$: Observable<Category[]>;
  change: boolean;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.categories$ = this.store.select(getCategories);
    this.store.select(state => state.products.toggle).subscribe(data => this.change = data);
  }

  filterProducts(slug: string) {
    this.store.dispatch(new GetProductsPerCategoryAction(slug));
  }
}

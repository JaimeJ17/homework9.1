import { Product } from './../../../shared/interfaces/product.interface';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { LikeProductAction } from '../../../../store/actions/product.actions';

fdescribe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  class RouterStub {
    navigate() {}
  }

  class StoreStub {
    dispatch() {}

    select(): Observable<Product[]> {
      return of([
        {
          id: 1,
          slug: 'product1 ',
          name: 'aaa',
          master: { price: '1.0', stock: 99 },
          image: { url: 'www.none.jpg' }
        }
      ]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCardModule,
        RouterModule
      ],
      providers: [
        { provide: Store, useClass: StoreStub },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('like should activate when likeProduct called', () => {
    const store = TestBed.get(Store);
    const spyStore = spyOn(store, 'dispatch');
    component.likeProduct(1, 1);
    expect(spyStore).toHaveBeenCalledWith(new LikeProductAction({ kind: 1, product_id: 1 }));
  });

  it('pressing like button should activate like method', () => {
    const spy = spyOn(component, 'likeProduct');
    const button = fixture.debugElement.nativeElement.querySelector('.like');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('pressing dislike button should activate like method', () => {
    const spy = spyOn(component, 'likeProduct');
    const button = fixture.debugElement.nativeElement.querySelector('.dislike');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('pressing cart button should activate addCart method', () => {
    const spy = spyOn(component, 'addCart');
    const button = fixture.debugElement.nativeElement.querySelector('.cart');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('openProduct should redirect to product page', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.openProduct(1);
    expect(spy).toHaveBeenCalledWith(['product']);
  });

  it('addCart should dispatch twice', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    component.addCart(1, 10, 'product', 'none', '30');
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('pressing image should activate openproduct method', () => {
    const spy = spyOn(component, 'openProduct');
    const img = fixture.debugElement.nativeElement.querySelector('.product-img');
    img.click();
    expect(spy).toHaveBeenCalled();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/modules/shared/interfaces/product.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatInputModule, MatInput } from '@angular/material/input';
import { LikeProductAction } from 'src/app/store/actions/product.actions';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  class StoreStub {
    dispatch() {}

    select(): Observable<Product> {
      return of(
        {
          id: 1,
          slug: 'product1 ',
          name: 'aaa',
          master: { price: '1.0', stock: 99 },
          image: { url: 'www.none.jpg' }
        }
      );
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent, SidebarComponent ],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCardModule,
        MatInputModule,
        AppRoutingModule
      ],
      providers: [
        { provide: Store, useClass: StoreStub },

      ]
    }).overrideComponent(SidebarComponent, {
      set: {
        selector: 'app-sidebar',
        template: `<h6>sidebar Settings</h6>`
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click should call add method', () => {
    const spy =  spyOn(component, 'add');
    const button = fixture.debugElement.nativeElement.querySelector('.add-item');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('click should call remove method', () => {
    const spy =  spyOn(component, 'remove');
    const button = fixture.debugElement.nativeElement.querySelector('.remove-item');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('add cart should dispatch twice', () => {
    const store = TestBed.get(Store);
    const spyStore =  spyOn(store, 'dispatch');
    component.addCart(1, '3', '´product', 'none', '30');
    expect(spyStore).toHaveBeenCalledTimes(2);
  });

  it('Add should increase the value of input by 1 ', async (() => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = 0;
    component.add(input);
    fixture.detectChanges();
    expect(input.value).toBe('1');
  }));

  it('remove should decrease value of input by 1 ', async (() => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = 1;
    component.remove(input);
    fixture.detectChanges();
    expect(input.value).toBe('0');
  }));

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

});

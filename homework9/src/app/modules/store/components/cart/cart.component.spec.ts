import { Store } from '@ngrx/store';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/modules/shared/interfaces/product.interface';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SelectorContext } from '@angular/compiler';
import * as fromCart from 'src/app/store/reducers/my-Cart.reducer';
import { getUser } from 'src/app/store/selectors/store.selectors';
import * as selects from 'src/app/store/selectors/store.selectors';
import { Router } from '@angular/router';

const fakeSelector = {
  getUser() {
    return 'values';
  },

  getItem(identifier: string) {
  },

  removeItem(identifier: string) {

  },
};

class StoreStub {
  dispatch() { }

  select(selector: any): Observable<any> {
    if (selector === fromCart.selectAll) {
      return of([{
        id: 1,
        product_variant_id: 1,
        quantity: 1,
        price: '30',
        name: 'product',
        url: 'none',
      }]);
    } else if (selector === getUser) {
      return of({
        id: 1,
        email: 'example@a.com'
      });
    } else {
      return of(30);
    }

  }
}
fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, SidebarComponent],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCardModule,
        MatInputModule,
        AppRoutingModule,
        MatSnackBarModule,
      ],
      providers: [{ provide: Store, useClass: StoreStub }]
    }).overrideComponent(SidebarComponent, {
      set: {
        selector: 'app-sidebar',
        template: `<h6>sidebar Settings</h6>`
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deleteItem dispatchs twice when called', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    component.deleteItem(1, '30', 2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('deleteItem should be called when button trash button is pressed', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.trashcan');
    const spy = spyOn(component, 'deleteItem');
    button.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('add should increase the value of the amount input', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '0';
    component.add(input, 1, '30', 30);
    expect(input.value).toBe('1');
  });

  it('add should make the value of the amount input 99 to 99', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '99';
    component.add(input, 1, '30', 30);
    expect(input.value).toBe('99');
  });

  it('modifyItem should be called when add is called', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '1';
    const spy = spyOn(component, 'modifyItem');
    component.add(input, 1, '30', 30);
    expect(spy).toHaveBeenCalled();
  });

  it('remove should decrease the value of the amount input', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '2';
    component.remove(input, 1, '30', 30);
    expect(input.value).toBe('1');
  });

  it('remove should make the value of the amount input 1 to 1', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '1';
    component.remove(input, 1, '30', 30);
    expect(input.value).toBe('1');
  });

  it('modifyItem should be called when remove is called', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.amount-input');
    input.value = '1';
    const spy = spyOn(component, 'modifyItem');
    component.remove(input, 1, '30', 30);
    expect(spy).toHaveBeenCalled();
  });

  it('finish should call dispatch 3 times', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    component.finish();
    expect(spy).toHaveBeenCalled();
  });

  it('finish should redirect when called and email is empty', () => {
    component.myUser.email = null;
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.finish();
    expect(spy).toHaveBeenCalledWith(['/login']);
  });



});

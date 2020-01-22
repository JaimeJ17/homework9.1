import { Category } from './../../../shared/interfaces/category.interface';
import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

class RouterStub {
  navigate() {
  }
}

class StoreStub {
  dispatch() {
  }

  select(): Observable<Category[]> {
    return of([{ id: 1, slug: 'category1 ', name: 'aaa'}, { id: 2, slug: 'category1 ', name: 'aaa'}]);
  }
}

fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent, ProductCardComponent ],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatCardModule,

      ],
      providers: [{provide: Store, useClass: StoreStub, }, {provide: Router, useClass: RouterStub, }]
    }).overrideComponent(ProductCardComponent, {
      set: {
          selector: 'app-product-card',
          template: `<h6>Product Settings</h6>`
      }
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filterpoducts should dispatch twice', () => {
    const store = TestBed.get(Store);
    const spyStore = spyOn(store, 'dispatch');
    component.filterProducts('slug', 'name');
    expect(spyStore).toHaveBeenCalledTimes(2);
  });
});

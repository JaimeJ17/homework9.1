import { SidebarComponent } from './../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { ProfileComponent } from './../profile/profile.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { Observable, of } from 'rxjs';
import { getLoginToken, getCartLenght } from 'src/app/store/selectors/store.selectors';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

class StoreStub {
  dispatch() { }

  select(selector: any): Observable<any> {
    if (selector === getLoginToken) {
      return of(true);
    } else if (selector === getCartLenght) {
      return of(1);
    } else {
      return of([{message: 'something went wrong'}]);
    }
  }
}

fdescribe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, SidebarComponent, ProfileComponent ],
      imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: SidebarComponent}, {path: '', component: SidebarComponent}])
      ],
      providers: [
        { provide: Store, useClass: StoreStub },
      ]
    }).overrideComponent(SidebarComponent, {
      set: {
        selector: 'app-sidebar',
        template: `<h6>sidebar Settings</h6>`
      }
    }).overrideComponent(ProfileComponent, {
      set: {
        selector: 'app-profile',
        template: `<h6>profile Settings</h6>`
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('avatar should change the display state of the profile', () => {
    const spy = spyOn(component, 'changeProfile');
    const avatar = fixture.debugElement.nativeElement.querySelector('.card-header-image');
    avatar.click();
    expect(spy).toHaveBeenCalled();
  });

  it('clicking avatar should change display state from false to true', () => {
    const avatar = fixture.debugElement.nativeElement.querySelector('.card-header-image');
    avatar.click();
    expect(component.displayUser).toBe(true);
  });

  it('clicking avatar twice should change display state from false to true then to false again', () => {
    const avatar = fixture.debugElement.nativeElement.querySelector('.card-header-image');
    avatar.click();
    avatar.click();
    expect(component.displayUser).toBe(false);
  });

  it('changeProfile exists', () => {
    const spy = spyOn(component, 'changeProfile');
    component.changeProfile();
    expect(spy).toHaveBeenCalled();
  });

  it('search method should dispatch twice', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    const searchbar = fixture.debugElement.nativeElement.querySelector('.searchbar-input');
    searchbar.value = '123';
    component.search(searchbar);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('clicking the magnifying glass should search with the input content', () => {
    const spy = spyOn(component, 'search');
    const searchbar = fixture.debugElement.nativeElement.querySelector('.searchbar-input');
    const icon = fixture.debugElement.nativeElement.querySelector('.search-icon');
    searchbar.value = '123';
    icon.click();
    expect(spy).toHaveBeenCalledWith(searchbar);
  });

  it('toggle method should dispatch once', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    component.toggle();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LogOutAction } from 'src/app/store/actions/login.action';
import { CleanCartAction, ResetTotalCartAction } from 'src/app/store/actions/cart.action';
import { By } from '@angular/platform-browser';

class RouterStub {
  navigate(params: Array<string>) {}
}

class StoreStub {
  dispatch() {
  }

  select(): Observable<string> {
    return of('jaime@e.com');
  }
}

fdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: Store, useClass: StoreStub, }, { provide: Router, useClass: RouterStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('close should be emitted', () => {
    const spy = spyOn(component.closeProfile, 'emit');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it ('close should be on log out', () => {
    const spy = spyOn(component.closeProfile, 'emit');
    component.logOut();
    expect(spy).toHaveBeenCalled();
  });

  it ('dispatch should have been called 3 times', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    component.logOut();
    expect(spy).toHaveBeenCalledWith(new LogOutAction());
    expect(spy).toHaveBeenCalledWith(new CleanCartAction());
    expect(spy).toHaveBeenCalledWith(new ResetTotalCartAction());
  });

  it ('Navigate should be called on LogOut', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.logOut();
    expect(spy).toHaveBeenCalledWith(['/home']);
  });

  it ('close should be called on click', async(() => {
    const spy = spyOn(component, 'close');
    fixture.detectChanges();
    const button =   fixture.debugElement.nativeElement.querySelector('.close-button');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));

  it ('Logout should be called on click', async(() => {
    const spy = spyOn(component, 'logOut');
    fixture.detectChanges();
    const button =   fixture.debugElement.nativeElement.querySelector('.logout-button');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  }));
});

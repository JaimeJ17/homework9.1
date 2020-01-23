import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NavigationComponent } from './modules/store/components/navigation/navigation.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './modules/store/components/sidebar/sidebar.component';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent, SidebarComponent, NavigationComponent
      ],
      providers: [
        provideMockStore()
      ]
    }).overrideComponent(SidebarComponent, {
      set: {
        selector: 'app-sidebar',
        template: `<h6>sidebar Settings</h6>`
      }
    }).overrideComponent(NavigationComponent, {
      set: {
        selector: 'app-navigation',
        template: `<h6>profile Settings</h6>`
      }
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

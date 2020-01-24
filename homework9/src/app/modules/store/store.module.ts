import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRoutingModule } from './app-store-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { sliderAnimation } from '../shared/constants/slide.constant';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormErrorComponent,
    NavigationComponent,
    ProductCardComponent,
    SidebarComponent,
    ProductComponent,
    ProfileComponent,
    LayoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatSnackBarModule,
    StoreRoutingModule
  ],
  exports: [NavigationComponent, SidebarComponent, LayoutComponent]

})
export class AppStoreModule {}

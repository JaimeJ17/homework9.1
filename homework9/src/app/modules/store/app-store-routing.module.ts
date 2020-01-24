import { ProductComponent } from './components/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication.guard';
import { CartComponent } from './components/cart/cart.component';
import { LayoutComponent } from './components/layout/layout.component';



const routes: Routes = [
  {
    path: 'login',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        canActivate: [AuthenticationGuard],
        data: {animation:  'login'}
      },
    ]
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SidebarComponent,
        data: {animation:  'home'}
      },
    ]
  },
  {
    path: 'cart',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CartComponent,
        data: {animation:  'cart'}
      }
    ]
  },
  {
    path: 'product',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductComponent,
        data: {animation:  'product'}
      },
    ]
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

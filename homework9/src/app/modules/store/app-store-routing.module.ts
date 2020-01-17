import { ProductComponent } from './components/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication.guard';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'home',
    component: SidebarComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }

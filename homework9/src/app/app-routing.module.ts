import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/store/components/login/login.component';
import { ProductCardComponent } from './modules/store/components/product-card/product-card.component';


const routes: Routes = [
  {
    path: '**',
    component: ProductCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

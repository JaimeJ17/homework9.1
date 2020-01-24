import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCardComponent } from './modules/store/components/product-card/product-card.component';
import { SidebarComponent } from './modules/store/components/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/store/store.module').then(mod => mod.AppStoreModule),
  },
  {
    path: '**',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

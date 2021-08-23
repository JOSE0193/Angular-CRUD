import { HeaderComponent } from './shared/template/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/template/footer/footer.component';
import { NavComponent } from './shared/template/nav/nav.component';

const routes: Routes = [
  {
    path:'home',
    component: FooterComponent,
    children: [
      {path: 'home',
      loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
      {path: 'produtos',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path: 'categorias',
      loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)}
    ]
  },
  {
    path:'home',
    component: HeaderComponent,
    children: [
      {path: 'home',
      loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
      {path: 'produtos',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path: 'categorias',
      loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)}
    ]
  },
  {
    path:'home',
    component: NavComponent,
    children: [
      {path: 'home',
      loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
      {path: 'produtos',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path: 'categorias',
      loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

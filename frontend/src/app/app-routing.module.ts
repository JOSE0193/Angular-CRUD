import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/template/footer/footer.component';
import { NavComponent } from './shared/template/nav/nav.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path:'',
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
  {path: 'produtos',
    loadChildren: () => import('./view/product/product.module').then(m => m.ProductModule)},
  {path: 'categorias',
    loadChildren: () => import('./view/categoria/categoria.module').then(m => m.CategoriaModule)}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

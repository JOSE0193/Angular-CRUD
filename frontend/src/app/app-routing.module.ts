import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',
  loadChildren: () => import('./view/view.module').then(m => m.ViewModule)},
  {path: 'produtos',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path: 'categorias',
  loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

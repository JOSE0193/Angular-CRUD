import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria-component/categoria.component';


@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }

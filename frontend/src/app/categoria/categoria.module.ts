import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria-component/categoria.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule
  ],
  exports: [
    CategoriaComponent
  ]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductCrudComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports: [
    ProductCrudComponent
  ]
})
export class ProductModule { }

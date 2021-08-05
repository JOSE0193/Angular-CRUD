import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCrudComponent } from './product-crud/product-crud.component';


@NgModule({
  declarations: [
    ProductCrudComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductCrudComponent
  ]
})
export class ProductModule { }

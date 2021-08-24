import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductCreateComponent
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductReadComponent } from './product-read/product-read.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductComponent,
    ProductReadComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductCreateComponent
  ]
})
export class ProductModule { }

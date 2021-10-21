import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './components/categoria/categoria.module';
import { ProductModule } from './components/product/product.module';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ViewModule,
    ProductModule,
    CategoriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaModule } from './components/categoria/categoria.module';
import { ProductModule } from './components/product/product.module';
import { SharedModule } from './shared/shared.module';
import { ViewModule } from './view/view.module';

import  localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

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
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

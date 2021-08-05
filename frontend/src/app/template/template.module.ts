import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class TemplateModule { }

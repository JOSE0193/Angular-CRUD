import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }

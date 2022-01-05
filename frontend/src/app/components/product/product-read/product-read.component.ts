import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../product.service';
import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];
  displayedColumns: string[] = ['id', 'name', 'price', 'details', 'action'];

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products
    })
  }

}





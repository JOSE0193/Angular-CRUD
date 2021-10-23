import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from '../product.service';
import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'details', 'actions'];

  constructor(
    private service: ProductService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.service.read().subscribe(products => {
      this.products = products
    });
  }

  openDialog(){
    this.dialog.open(ProductDeleteComponent);
  }

}

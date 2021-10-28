import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from '../product.service';
import { ProductDeleteComponent } from './../product-delete/product-delete.component';
import { Product } from './../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    details: ''
  };

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'details', 'action'];

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.service.read().subscribe((data: Product[]) => {
      this.products = data;
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe((product) => {
      this.product = product
    });
  }

  openDialog(){
    this.dialog.open(ProductDeleteComponent);
  }
}

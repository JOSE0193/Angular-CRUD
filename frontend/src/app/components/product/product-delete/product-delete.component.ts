import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    details: ''
  };

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe((product) => {
      this.product = product
    });
  }

  confirmDelete(): void{
    this.service.delete(this.product.id).subscribe(() => {
      this.service.showMessage('Produto excluído!');
      this.dialog.closeAll;
    })
  }

  cancelDelete(): void{
    this.service.showMessage('Operação cancelada!');
    this.dialog.closeAll;
  }

}

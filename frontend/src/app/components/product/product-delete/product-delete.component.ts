import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    @Inject (MAT_DIALOG_DATA) public data: Product

  ) {  }

  ngOnInit(): void{

  }

  confirmDelete(): void{
    this.service.delete(this.product.id).subscribe((res) => {
      this.service.showMessage('Produto excluído!');
      this.dialog.afterAllClosed
      this.data = res
    })
  }

  cancelDelete(): void{
    this.service.showMessage('Operação cancelada!');
    this.dialog.closeAll;
  }

}

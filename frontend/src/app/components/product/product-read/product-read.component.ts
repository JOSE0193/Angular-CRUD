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

  products$: Observable<Product[]>;
  displayedColumns: string[] = ['id', 'name', 'price', 'details', 'action'];
  products!: Product[];


  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.products$ = service.read();
    }

  ngOnInit(): void { }


  openDialog(id: any){
    const dialogRef = this.dialog.open(ProductDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.service.readById(id);
      console.log(`Dialog result: ${result}`);

    });
  }

}

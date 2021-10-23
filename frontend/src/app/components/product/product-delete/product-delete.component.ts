import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Observable<Product>;

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router

  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe((product) => {
      this.product = product;

    }
  )}

  ngOnInit(): void {

  }

  confirmDelete(): void {
    this.service.delete(this.product.id).subscribe(() => {
      this.service.showMessage('O produto foi deletado!')
      this.router.navigate(['/produtos']);
    });
  }

  cancelDelete() {
    this.dialog.closeAll();
    this.router.navigate(['/produtos'])
  }

}

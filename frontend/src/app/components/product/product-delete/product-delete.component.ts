import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private service: ProductService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.service.delete(this.product.id).subscribe(() => {
      this.service.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }
}

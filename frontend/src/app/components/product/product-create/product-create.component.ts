import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/produtos']);
    })

  }

  cancel(){
    this.productService.showMessage('Operação cancelada!');
    this.router.navigate(['/produtos']);
  }
}

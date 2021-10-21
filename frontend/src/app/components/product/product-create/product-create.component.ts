import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  createProduct(){
    this.productService.showMessage('Produto criado com sucesso!');
  }

  cancel(){
    this.productService.showMessage('Operação cancelada!');
    this.router.navigate(['/produtos']);
  }
}

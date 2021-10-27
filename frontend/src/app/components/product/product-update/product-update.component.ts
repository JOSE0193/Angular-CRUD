import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    _id: 0,
    name: '',
    price: 0,
    details: ''
  }

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe((product) => {
      this.product = product
    });
  }

  update(): void {
    this.service.update(this.product).subscribe(() => {
      this.service.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    })
  }

  cancel(): void {
    this.service.showMessage('Operação cancelada!');
    this.router.navigate(['/produtos']);
  }
}

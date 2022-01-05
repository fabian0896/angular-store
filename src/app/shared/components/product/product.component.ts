import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product | undefined;
  @Output() details: EventEmitter<Product> = new EventEmitter();

  constructor(
    private route: Router
  ) { }

  handleDetails() {
    this.details.emit(this.product);
    this.route.navigate(['products', this.product?.id]);
  }

}

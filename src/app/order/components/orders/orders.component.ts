import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Product } from '../../../product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  products$: Observable<Product[]>;
  timeIcon = faTimes;
  testProducts: Product[] = [
    {
        "id": "3",
        "image": "assets/images/mug.png",
        "title": "Mug",
        "price": 80000,
        "description": "bla bla bla bla bla"
    },
    {
        "id": "5",
        "image": "assets/images/stickers1.png",
        "title": "Stickers",
        "price": 80000,
        "description": "bla bla bla bla bla"
    },
    {
        "id": "6",
        "image": "assets/images/stickers2.png",
        "title": "Stickers",
        "price": 80000,
        "description": "bla bla bla bla bla"
    },
    {
        "id": "11",
        "image": "assets/images/hoodie.png",
        "title": "nuevo producto",
        "price": 90000,
        "description": "xxxx"
    }
  ]

  constructor(
    private cartService: CartService,
  ) {
    this.products$ = this.cartService.cart$
  }
}

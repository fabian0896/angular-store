import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Platzi Store'
  faShoppingCart = faShoppingCart;
  cartSize$: Observable<number>;

  constructor(
    private cartService: CartService,
  ) {
    this.cartSize$ = this.cartService.cart$.pipe(
      map(cart => cart.length)
    );
  }
}

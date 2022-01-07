import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProductsService,
    CartService,
    AuthService,
  ]
})
export class CoreModule { }

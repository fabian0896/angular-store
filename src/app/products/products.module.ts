import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule {}

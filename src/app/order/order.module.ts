import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { TotalValuePipe } from './pipes/total-value.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    TotalValuePipe
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FontAwesomeModule,
  ]
})
export class OrderModule { }

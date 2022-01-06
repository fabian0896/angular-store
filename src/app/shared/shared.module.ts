import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

import { HighlightDirective } from './directives/highlight/highlight.directive';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
  ]
})
export class SharedModule { }

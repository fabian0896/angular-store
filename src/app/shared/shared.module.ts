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
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    LoginModalComponent,
  ],
})
export class SharedModule { }

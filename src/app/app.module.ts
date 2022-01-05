import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

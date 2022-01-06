import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.urlApi}/products`);
  }

  getProduct(id: string) {
    //return this.products[0]
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }
}

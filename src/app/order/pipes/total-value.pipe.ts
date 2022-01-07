import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

@Pipe({
  name: 'totalValue'
})
export class TotalValuePipe implements PipeTransform {

  transform(products: Product[] | null): number {
    if (!products) return 0;
    return products.reduce((sum, p) => sum + p.price, 0);
  }

}

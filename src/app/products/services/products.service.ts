import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  isfetch = new Subject<false>();

  constructor(private https:HttpClient) { }

  GetAllproducts() {
    return this.https.get<Product[]>("https://fakestoreapi.com/products");
  }

  GetproductsByCategory(categoryName:string) {
    if (categoryName === 'All') {
      return this.https.get<Product[]>("https://fakestoreapi.com/products");
    } else {
      return this.https.get<Product[]>(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
  }

  getProductByid(id:number) {
    return this.https.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  GetCategory() {
    return this.https.get("https://fakestoreapi.com/products/categories");
  }
}

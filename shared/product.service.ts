import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  formData : Product
  list: Product[];
  readonly rootURL = 'http://localhost:56308/api';

  constructor(private http : HttpClient) { }

  postProduct(formData: Product) {
    return this.http.post(this.rootURL + '/products', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/products')
      .toPromise().then(res => this.list = res as Product[]);
  }

  putProduct(formData: Product) {
    return this.http.put(this.rootURL + '/products/' + formData.productId, formData);

  }

  deleteProduct(id: number) {
    return this.http.delete(this.rootURL + '/products/' + id);
  }
}

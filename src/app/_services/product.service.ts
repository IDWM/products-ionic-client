import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  fakeStoreApi: string = environment.fakeStoreApi;

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.fakeStoreApi}/products`);
  }
}

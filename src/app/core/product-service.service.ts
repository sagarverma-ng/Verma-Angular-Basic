import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/Product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  callSingleProduct(): Observable<Product> {
    return this.http.get<Product>('assets/Product.json');
  }

  callMultipleProduct(): Observable<Product[]> {
     return this.http.get<Product[]>('assets/All-Product.json');
  }
}


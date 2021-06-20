import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductOperationService {

  constructor(private http: HttpClient) { }

  GetProduct(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44301/api/Product');
  }

  GetProductById(id: any): Observable<any> {
    return this.http.get<any>('https://localhost:44301/api/Product/' + id);
  }
}

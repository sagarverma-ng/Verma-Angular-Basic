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

  Insert(): Observable<any> {
    debugger
    return this.http.post<any>('https://localhost:44301/api/Product', {
      id: 22,
      nameData: '2121',
      productSets: []
    });
  }

  Update(id: any): Observable<any> {
    debugger
    return this.http.put<any>('https://localhost:44301/api/Product', {
      id: 22,
      nameData: '2121',
      productSets: []
    });
  }

  Delete(id: number): Observable<any> {
    debugger
    return this.http.delete<any>('https://localhost:44301/api/Product?' + id);
    // return this.http.put<any>('https://localhost:44301/api/Product', {
    //   id: 21
    // });
  }
}

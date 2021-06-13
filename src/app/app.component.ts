import { toTypeScript } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  stringArray: string[];
  ProductArray: Product[];

  constructor() {
    this.title = 'hello';
    this.stringArray = []; // new Array()
    this.stringArray.push('one');
    this.stringArray.push('two');
    this.stringArray.push('three');
    this.stringArray.push('four');
  }
  // tslint:disable-next-line:typedef
  AddValueToProductObj() {
    this.ProductArray = [];
    const one = new Product();
    one.id = 1;
    one.name = 'one';
    one.address = 'bangalore';
    this.ProductArray.push(one);
    const two = { id: 2, name: 'two', address: 'Banglore' };
    this.ProductArray.push(two);
    for (let i = 1; i <= 10; i++) {

      this.ProductArray.push({ id: 3 + i, name: 'two_' + i, address: 'Banglore_' + i });
    }
  }
}

class Product {
  id: any;
  name: string;
  address: string;
}

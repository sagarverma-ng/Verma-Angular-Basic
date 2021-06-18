import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../core/product-service.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-service-concept',
  templateUrl: './service-concept.component.html',
  styleUrls: ['./service-concept.component.css']
})
export class ServiceConceptComponent implements OnInit {
  SingleObj: Product;
  MultipleObj: Product[];

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.service.callSingleProduct().subscribe(res => {
      this.SingleObj = res;
    });

  }

  GetAllProduct(): void {
    this.service.callMultipleProduct().subscribe(res => {
      this.MultipleObj = res;
    });
  }
}





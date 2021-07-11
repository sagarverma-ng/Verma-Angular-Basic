import { Component, OnInit } from '@angular/core';
import { ProductOperationService } from '../core/product-operation.service';

@Component({
  selector: 'app-service-operation',
  templateUrl: './service-operation.component.html',
  styleUrls: ['./service-operation.component.css']
})
export class ServiceOperationComponent implements OnInit {

  constructor(private service: ProductOperationService) { }

  ngOnInit(): void {
  }

  Get(): void {
    debugger
    this.service.GetProduct().subscribe(res => {
      debugger
    }, error => {
      debugger
    }, () => {
      debugger
    });

  }

  GetById(): void {
    debugger
    this.service.GetProductById(4).subscribe(res => {
      debugger
    }, error => {
      debugger
    }, () => {
      debugger
    });
  }

  Insert(): void {
    debugger
    this.service.Insert().subscribe(res => {
      debugger
    }, error => {
      debugger
    }, () => {
      debugger
    });
  }

  Update(): void {
    debugger
    this.service.Update(21).subscribe(res => {
      debugger
    }, error => {
      debugger
    }, () => {
      debugger
    });
  }

  Delete(): void {
    debugger
    this.service.Delete(10).subscribe(res => {
      debugger
    }, error => {
      debugger
    }, () => {
      debugger
    });
  }

}

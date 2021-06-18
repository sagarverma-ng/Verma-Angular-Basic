import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() compingFromParent: string;
  @Output() passToParentValue = new EventEmitter<string>();

  constructor() {
    console.log('constructor');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }





  PassValueToParent(): void {
    this.passToParentValue.emit(this.compingFromParent);

  }

}

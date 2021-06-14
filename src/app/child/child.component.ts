import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() compingFromParent: string;
  @Output() passToParentValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  PassValueToParent(): void {
    this.passToParentValue.emit(this.compingFromParent);

  }

}

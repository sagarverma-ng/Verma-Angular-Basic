import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string;
  passNameValueToChild: string;
  constructor() { }

  ngOnInit(): void {
  }

  PassValueToChild(): void {
    this.passNameValueToChild = this.name;
  }

  CallComingfromChild(value): void {
    this.name = value;
  }
}

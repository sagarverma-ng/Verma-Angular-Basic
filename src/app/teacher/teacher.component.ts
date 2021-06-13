import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  count = 10;
  count2 = 0;

  
  PassTo2ndTextBox() {

    this.count2 = Number(this.count) + 1;

  }
}

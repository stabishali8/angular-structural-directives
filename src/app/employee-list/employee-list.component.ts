import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>
      Employee List
    </h2>
    <ul *ngFor="let employee of employees">
      <li>
        {{employee.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  public employees = [
    {"ïd":1, "name":"Tabish","age":26},
    {"ïd":2, "name":"Kirat","age":17},
    {"ïd":3, "name":"Asma","age":20},
    {"ïd":4, "name":"Maryam","age":20},
    {"ïd":5, "name":"Javeria","age":22},
  ]
  ngOnInit(): void {
  }

}

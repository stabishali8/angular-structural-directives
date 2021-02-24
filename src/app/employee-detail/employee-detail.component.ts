import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: 
   `
  <h2>
    Employee Detail
  </h2>
  <ul *ngFor="Let employee of employees">
    <li>
      {{employee.id}}. {{employee.name}} - {{employee.age}}
    </li>
  </ul>
   `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

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

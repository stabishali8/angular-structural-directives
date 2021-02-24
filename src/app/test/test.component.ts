import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
    `
  <h2>
    {{"Degrees vs Skills " + name | lowercase}}
  </h2>
  <h2>
    {{"Degrees vs Skills " + name | lowercase}}
  </h2>
  <h2>
    {{"Degrees vs Skills " + name | titlecase}}
  </h2>
  <h2>
    {{"Degrees vs Skills " + name | slice:3:5}}
  </h2>
  <h2>
    {{"name | json " + person | json}}
  </h2>
  <h2>
    {{"5.678 " | number:'1.2-3'}}
  </h2>
  <h2>
    {{"5.678 " | number:'1.2-3'}}
  </h2>
  <h2>
    {{"5.678 " | number:'1.2-3'}}
  </h2>
  <h2>
  {{"5.678 " | percent}}
  </h2>
  <h2>
  {{"5.678 " | currency}}
  </h2>
  <h2>
  {{"5.678 " | currency:'USD'}}
  </h2>
  <h2>
  {{ date }}
  </h2>
  <h2>
  {{ date | date:'short' }}
  </h2>
  <h2>
  {{ date | date:'shortDate' }}
  </h2>
  <h2>
  {{ date | date:'shortTime' }}
  </h2>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name: any;

  public person = {
    "firstName" : "Syed Tabish",
    "lastName" : "Ali",
    "age":26
  }
  public date = new Date();
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hey Syed Tabish Ali')
  }

}

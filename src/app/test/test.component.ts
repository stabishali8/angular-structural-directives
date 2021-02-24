import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  `
  <h2>
    {{"Degrees vs Skills " + name}}
  </h2>

  <button (click)="fireEvent()">
    Send Event
  </button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name:any; 

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Syed Tabish Ali')
  }

}

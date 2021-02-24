import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  `<div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  
  <ng-template #thenBlock>
    <h2>Syed Tabish Ali</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>Degree VS Skills</h2>
  </ng-template>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false; 
  constructor() { }

  ngOnInit(): void {
  }

}

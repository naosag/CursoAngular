import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Demos <small>Angular</small></h1>
    <hr>
    <i class="fas fa-sync fa-2x fa-spin"></i>
    
    <app-ng-style></app-ng-style>
    <app-css></app-css>

    <app-crase></app-crase>

    <p [appResaltado]="'blue'" >Hola mundo</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

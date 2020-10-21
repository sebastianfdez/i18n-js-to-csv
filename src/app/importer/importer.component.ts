import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importer',
  template: `
    <button (click)="importCSV()">Import CSV</button>
  `
})

export class ImporterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  importCSV() {

  }
}
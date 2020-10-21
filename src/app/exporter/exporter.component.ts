import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-exporter',
  template: `
    <button (click)="exportCSV()">Export CSV</button>
  `
})

export class ExporterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  exportCSV() {
    var wb = XLSX.utils.book_new();
  }
}
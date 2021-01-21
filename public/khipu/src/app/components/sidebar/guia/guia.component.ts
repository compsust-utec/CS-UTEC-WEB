import { Component, OnInit } from '@angular/core';
declare var Tablesort: any;

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Tablesort(document.getElementById("sort"));
  }

}

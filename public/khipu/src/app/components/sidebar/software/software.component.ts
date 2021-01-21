import { Component, OnInit } from '@angular/core';
declare var Tablesort: any;

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Tablesort(document.getElementById("sort"));
  }

}

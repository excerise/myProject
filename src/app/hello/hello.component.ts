import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'chartjs';
declare let Chart;

@Component({
  moduleId: module.id,
  selector: 'app-hello',
  templateUrl: 'hello.component.html',
  styleUrls: ['hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

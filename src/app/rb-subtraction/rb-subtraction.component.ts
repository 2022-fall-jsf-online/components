import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rb-subtraction',
  templateUrl: './rb-subtraction.component.html',
  styleUrls: ['./rb-subtraction.component.css']
})
export class RbSubtractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 90;
  numberTwo = 10;
  total = 80;

  subtract = () => this.total = this.numberOne - this.numberTwo;

}

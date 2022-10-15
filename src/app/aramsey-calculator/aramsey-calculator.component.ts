import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aramsey-calculator',
  templateUrl: './aramsey-calculator.component.html',
  styleUrls: ['./aramsey-calculator.component.css']
})
export class AramseyCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 25;
  numberTwo = 5;
  total = 30;
  operator = "+";

  add = () => {
    this.operator = "+";
    this.total = this.numberOne + this.numberTwo;
  }
  subtract = () => {
    this.operator = "-";
    this.total = this.numberOne - this.numberTwo;
  }
  multiply = () => {
    this.operator = "*";
    this.total = this.numberOne * this.numberTwo;
  }
  divide = () => {
    this.operator = "/";
    this.total = this.numberOne / this.numberTwo;
  }


}

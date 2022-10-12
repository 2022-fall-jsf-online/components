import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ra-calculator',
  templateUrl: './ra-calculator.component.html',
  styleUrls: ['./ra-calculator.component.css']
})
export class RaCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // initializes variables
  numberOne = 0;
  numberTwo = 0;
  total = " " + 0;

  // Function adds both input numbers
  add = () => this.total = (" Your total is ") + (this.numberOne + this.numberTwo);

  // Function subtracts both input numbers
  subtract = () => this.total = " Your total is " + (this.numberOne - this.numberTwo);
 
  // Function multiplies both input numbers
  multiply = () => this.total = " Your total is " + (this.numberOne * this.numberTwo);

  // Function divides both input numbers
  divide = () => this.total = " Your total is " + (this.numberOne / this.numberTwo);
  
}

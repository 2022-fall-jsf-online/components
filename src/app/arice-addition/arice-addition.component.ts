import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arice-addition',
  templateUrl: './arice-addition.component.html',
  styleUrls: ['./arice-addition.component.css']
})
export class AriceAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;
  subtract = () => this.total = this.numberOne - this.numberTwo;
  multiply = () => this.total = this.numberOne * this.numberTwo;
  divide = () => this.total = this.numberOne / this.numberTwo;
}

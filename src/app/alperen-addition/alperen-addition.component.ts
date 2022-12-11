import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alperen-addition',
  templateUrl: './alperen-addition.component.html',
  styleUrls: ['./alperen-addition.component.css']
})
export class AlperenAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstNumber = 0;
  secondNumber = 0;
  total = 0;

  add = () => this.total = this.firstNumber + this.secondNumber;
  subtract = () => this.total = this.firstNumber - this.secondNumber;
  multiply = () => this.total = this.firstNumber * this.secondNumber;
  divide = () => this.total = this.firstNumber / this.secondNumber;

}

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

  firstNumber = 10;
  secondNumber = 90;
  total = 100;

  add = () => this.total = this.firstNumber + this.secondNumber;

}

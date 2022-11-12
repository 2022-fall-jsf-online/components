import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rlee-adding',
  templateUrl: './rlee-adding.component.html',
  styleUrls: ['./rlee-adding.component.css']
})
export class RleeAddingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //After ngOnInit
    numberOne = 1;
    numberTwo = 2;
    total = 3;

    // get numberOne(number1) {
    //   return number1;
    // }

    // get numberTwo(number2) {
    //   return number2;
    // }

    addingNumbers = () => this.total = this.numberOne + this.numberTwo;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spatel-operation',
  templateUrl: './spatel-operation.component.html',
  styleUrls: ['./spatel-operation.component.css']
})
export class SpatelOperationComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    
  }


  numberFromField = 0;

  squareThisNumber = () => {

    this.numberFromField = this.numberFromField *this.numberFromField;

  }
  rootThisNumber = () => {
    this.numberFromField = Math.sqrt(this.numberFromField);
  }

  resetThisNumber = () => {
    this.numberFromField = 0;
  }
  randomNumber = () => {
   const newNumber = (Math.random() *100);
   this.numberFromField = Math.round(newNumber);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alm-additional',
  templateUrl: './alm-additional.component.html',
  styleUrls: ['./alm-additional.component.css']
})
export class AlmAdditionalComponent implements OnInit {

  constructor( ) { }


  ngOnInit(): void {
}

numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;

  divide = () => this.total = this.numberOne / this.numberTwo;

  add = () => this.total = this.numberOne + this.numberTwo;

  subtract = () => this.total = this.numberOne - this.numberTwo;

}
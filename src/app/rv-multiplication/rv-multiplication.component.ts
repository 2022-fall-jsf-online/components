import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rv-multiplication',
  templateUrl: './rv-multiplication.component.html',
  styleUrls: ['./rv-multiplication.component.css']
})
export class RvMultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}

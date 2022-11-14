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

  numberOne = 5;
  numberTwo = 5;
  total = 25;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}

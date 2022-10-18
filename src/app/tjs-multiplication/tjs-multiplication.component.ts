import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alm-multiplication',
  templateUrl: './alm-multiplication.component.html',
  styleUrls: ['./alm-multiplication.component.css']
})
export class AlmMultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}

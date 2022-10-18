import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-multiplication',
  templateUrl: './tjs-multiplication.component.html',
  styleUrls: ['./tjs-multiplication.component.css']
})
export class TjsMultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;

}

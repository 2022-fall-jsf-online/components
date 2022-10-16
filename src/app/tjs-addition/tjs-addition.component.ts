import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-addition',
  templateUrl: './tjs-addition.component.html',
  styleUrls: ['./tjs-addition.component.css']
})
export class TjsAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;

}

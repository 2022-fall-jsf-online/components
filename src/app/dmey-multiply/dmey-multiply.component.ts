import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmey-multiply',
  templateUrl: './dmey-multiply.component.html',
  styleUrls: ['./dmey-multiply.component.css']
})
export class DmeyMultiplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 1;
  numberTwo = 2;
  total = 2;

  multiply = () => this.total = this.numberOne * this.numberTwo;
}

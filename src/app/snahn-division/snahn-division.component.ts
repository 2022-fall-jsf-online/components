import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snahn-division',
  templateUrl: './snahn-division.component.html',
  styleUrls: ['./snahn-division.component.css']
})
export class SnahnDivisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 11;
  total = 21;

  divide = () => this.total = this.numberOne / this.numberTwo;

}

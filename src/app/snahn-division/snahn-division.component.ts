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

  numberOne = 0;
  numberTwo = 0;
  total = 0;

  divide = () => this.total = this.numberOne / this.numberTwo;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsan-math',
  templateUrl: './bsan-math.component.html',
  styleUrls: ['./bsan-math.component.css']
})
export class BsanMathComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numberTotal = 0;
  numberTip = 0;
  total = 0;

  //totalTip = () => this.tip = this.numberTotal / this.numberTip;

  totalWithTip = () => this.total = this.numberTotal * this.numberTip + this.numberTotal; 
}

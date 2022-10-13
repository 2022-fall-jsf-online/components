import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsan-addition',
  templateUrl: './bsan-addition.component.html',
  styleUrls: ['./bsan-addition.component.css']
})
export class BsanAdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 500;
  numberTwo = 50;
  numberThree = 200;
  
  total  = 2000;

  doMath = () => this.total = this.numberOne / this.numberTwo * this.numberThree;

}

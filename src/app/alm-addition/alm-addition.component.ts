import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alm-addition',
  templateUrl: './alm-addition.component.html',
  styleUrls: ['./alm-addition.component.css']
})
export class AlmAdditionComponent implements OnInit {

  constructor( ) { }


  ngOnInit(): void {
}

numberOne = 10;
  numberTwo = 90;
  total = 900;

  multiply = () => this.total = this.numberOne * this.numberTwo;
  
}
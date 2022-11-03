import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smf-tip-calculator',
  templateUrl: './smf-tip-calculator.component.html',
  styleUrls: ['./smf-tip-calculator.component.css']
})
export class SmfTipCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deliveryFee = 5;
  orderTotal = 0; 
  tipAmount = 0;
  total = 5;

  add = () => this.total = this.deliveryFee + this.orderTotal + this.tipAmount;

}

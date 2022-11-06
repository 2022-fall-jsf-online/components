import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-dh-coupon',
  templateUrl: './dh-coupon.component.html',
  styleUrls: ['./dh-coupon.component.css']
})
export class DhCouponComponent implements OnInit {

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {
  }

  orderTotal = 0;
  discount = 0;

  totalWithDiscount = " " +0;

  coupon = () => this.totalWithDiscount = (" ") + (this. orderTotal - this.discount);
}

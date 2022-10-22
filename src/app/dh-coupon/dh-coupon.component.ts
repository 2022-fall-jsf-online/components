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

    const discountPrice = this.pizzaSvc.toppingsTotal;

    console.log(discountPrice);
  }

}

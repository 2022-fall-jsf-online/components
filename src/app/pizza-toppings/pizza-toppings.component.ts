import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI.. (Dependency/Service Injection)
  constructor(
    //Instance variable of class
    private pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {
    //Calling this instanceVariable to run function
    const pt = this.pizzaSvc.getPizzaToppingFromTheCloud();
    console.log(pt);
  }

}

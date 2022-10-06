import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingsDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

    // Magic DI... dependancy injection
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availablePizzaToppings: PizzaToppingsDisplay[] = [];

  // ng calls for angular
  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);

  }

}

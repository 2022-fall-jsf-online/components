import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface pizzaToppingsDisplay {
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

  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availablePizzaTopings: pizzaToppingsDisplay[] = [];
  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaTopings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    )
    console.log(this.availablePizzaTopings);
  }
  totalPrice = 0;
  
  calculateTotal = () => {
    this.totalPrice = this.availablePizzaTopings
    .filter(x => x.checked)
    .reduce(
      (acc, x) => acc + x.price
      , 0
    )
   ;
  }
}

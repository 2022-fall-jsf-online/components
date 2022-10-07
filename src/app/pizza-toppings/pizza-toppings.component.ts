import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
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

  // Magic dependacy injection...
  constructor(
    private pizzaSvc: PizzaService
  ) { }

    availablePizzaToppings: PizzaToppingsDisplay[ ]= [ ];

    ngOnInit(): void {
    
      // creates variabkles that calls function from the service page
    const pizzaToppings = this.pizzaSvc.getPizzaToppingsFromCloud();
    console.log(pizzaToppings);

    // adds checked to the array object
    this.availablePizzaToppings = pizzaToppings.map(
      x => ({
        ...x,
        checked: false
      })
    );

    console.log(this.availablePizzaToppings);
  }

  totalPrice = 0;

  calculateTotal = () => {
    this.totalPrice = this.availablePizzaToppings.filter(
      x => x.checked).reduce(
        (acc, x) => acc + x.price,
        0
      )
    ;
  }

}

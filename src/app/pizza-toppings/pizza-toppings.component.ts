import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';


interface PizzaToppingDisplay{
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

  // Dependency Injection 
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {

    const pizzaTopping = this.pizzaSvc.accessPizzaToppings();
    console.log(pizzaTopping);

    //Transform the object array to add a new property 'checked'
    this.availablePizzaToppings = pizzaTopping.map(
      x => ({
        ...x // Spread in existing properties
        , checked: false // Add new property 
      })
    );

    console.log(this.availablePizzaToppings);
  }


  totalPrice = 0;

  calculateTotal = () => {
    this.totalPrice = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      )
    ;
  } 
}

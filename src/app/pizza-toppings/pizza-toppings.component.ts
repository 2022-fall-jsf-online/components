import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';


//Shape for Model/View
//Ensures correct datatypes are used
interface PizzaToppingDisplay {
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

  //Magic DI.. (Dependency/Service Injection)
  constructor(
    //Instance variable of class
    private pizzaSvc: PizzaService
  ) { }

  //Using this variable to hold the toppings that are pulled in from API
  availablePizzaToppings: PizzaToppingDisplay[] = [];


  ngOnInit(): void {
    //Calling this instanceVariable to run function
    //Get objects from API/Service
    const pt = this.pizzaSvc.getPizzaToppingFromTheCloud();
    console.log(pt);

    //Put toppings from API into this Array
    //Transform them into the shape that we want (from interface above)
    this.availablePizzaToppings = pt.map(
      //spread in x (name & price) & add checked property, initialized to false
      x => ({
        ...x
        , checked: false
      })
    );
    console.log(this.availablePizzaToppings);
  }

}

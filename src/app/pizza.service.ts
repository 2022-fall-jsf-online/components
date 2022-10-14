import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  accessPizzaToppings() {
    // Web service call here
    const toppingsViaService = [
      {
        name: 'Pineapple'
         , print: 1.50
      }
      , {
        name: 'Bacon'
         , print: 2
      }
      , {
        name: 'Pepperoni'
         , print: 2
      }
    ];

    return toppingsViaService;
  }
}

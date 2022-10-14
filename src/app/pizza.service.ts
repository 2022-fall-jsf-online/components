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
        , price: 1.50
      }
      , {
        name: 'Bacon'
        , price: 2
      }
      , {
        name: 'Pepperoni'
        , price: 2
      }
    ];

    return toppingsViaService;
  }
}

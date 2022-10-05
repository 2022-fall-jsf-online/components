import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() { 
    const toppingsFromWebService = [
      {
        name: 'Extra Cheese'
        , price: 1.00
      }
      , {
        name: 'Mushrooms'
        , price: .50
      }
      , {
        name: 'Bacon'
        , price: 2.50
      }
    ];
    return toppingsFromWebService;
  }
}

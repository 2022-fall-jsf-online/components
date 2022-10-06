import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // pretend to make a web service call here
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Pepporoni'
        , price: 1.50
      }
      , {
        name: 'Sausage'
        , price: 1.75
      }
    ];

    return toppingsFromWebService;
  }
}

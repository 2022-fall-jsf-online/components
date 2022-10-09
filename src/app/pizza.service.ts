import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    //pretend we make a web service call

    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      ,      {
        name: 'Peppers'
        , price: 1.50
      }
      ,      {
        name: 'Mushrooms'
        , price: 1.75
      }
    ];

    return toppingsFromWebService;
    }
  }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingFromTheCloud() {
    //Web service call
    const toppingsFromWebService = [
      {
        name: 'Ham'
        , price: 2.50
      }
      , {
        name: 'Pineapple'
        , price: 2.25
      }
      , {
        name: 'Feta'
        , price: 2.00
      }
    ];
    return toppingsFromWebService;
  }

}

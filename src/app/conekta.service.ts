import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare var Conekta: any;


export interface CreditCard {
  number: string;
  name: string;
  cvc: string;
  exp_month: string;
  exp_year: string
}

@Injectable({
  providedIn: 'root'
})
export class ConektaService {

  constructor() {
    Conekta.setPublicKey(environment.conekta_public_key);
  }

  createToken(card: CreditCard): Promise<any> {
    return new Promise((resolve, reject)=>{
      Conekta.Token.create({card: card}, resolve, reject);
    });
  }

}

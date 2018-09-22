import { Component } from '@angular/core';
import { ConektaService } from './conekta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'richard-test';

  constructor(private conekta: ConektaService){
  }

  async submitCreditCard(){
    try{
      let response = await this.conekta.createToken({
        number: '4242424242424242',
        name: 'Papu pro',
        cvc: '1234',
        exp_month: '12',
        exp_year: '2020',
      });
      console.log('Success');
      console.log(response);
      //... submit to server
    }catch(e){
      console.log('Error:');
      console.log(e);
    }
  }
}

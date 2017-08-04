import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyFormService } from '../../services/myform'

@Component({
  selector: 'thankyou-home',
  templateUrl: 'thankyou.html'
})
export class ThankyouPage {

  constructor(public navCtrl: NavController,private formData: MyFormService) {

  }

}

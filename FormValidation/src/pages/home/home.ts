import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyFormService } from "../../services/myform";
import { ThankyouPage } from "../thankyou/thankyou";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private data: any;
  private isSubmitted = false;

  constructor(
    public navCtrl: NavController,
    private formData: MyFormService,
  ) {
    this.data = {
      name: '',
      phone: '',
      comment: '',
      tos: false
    }
  }
  onSubmit(form) {
    this.isSubmitted = true
    if ( (form.valid) && (form.value.tos)) {
      this.formData.name = form.name
      this.formData.phone = form.phone
      this.formData.comment = form.comment
      this.navCtrl.push(ThankyouPage)
    }
  }
  noSubmit(e) {
    e.preventDefault();
  }

}

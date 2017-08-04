import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    console.log('Enter Page 3')
  }
  onSlideChanged(e) {
    let currentIndex = this.slider.getActiveIndex();
    console.log("You are on slide ", (currentIndex + 1))

  }

}

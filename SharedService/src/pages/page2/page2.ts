import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from "../../providers/shared-data/shared-data";
import { Page1Page } from "../page1/page1";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(
    private user: SharedDataProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
  goToPage1(){
    this.navCtrl.push(Page1Page)
  }

}

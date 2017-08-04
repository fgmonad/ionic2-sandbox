import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from "../../providers/shared-data/shared-data";
import { Page2Page } from "../page2/page2";

/**
 * Generated class for the Page1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private user: SharedDataProvider
  ) {
  }
  goToPage2() {
    this.navCtrl.push(Page2Page)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}

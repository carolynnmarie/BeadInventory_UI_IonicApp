import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpecificListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specific-list',
  templateUrl: 'specific-list.html',
})
export class SpecificListPage {

  specificList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storeList:any) {
  }

  ionViewDidLoad() {
    this.specificList = this.storeList;
  }


}

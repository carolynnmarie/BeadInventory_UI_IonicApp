import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindingsProvider } from '../../providers';

/**
 * Generated class for the SearchFindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-finding',
  templateUrl: 'search-finding.html',
})
export class SearchFindingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public findingsProvider: FindingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchFindingPage');
  }

}

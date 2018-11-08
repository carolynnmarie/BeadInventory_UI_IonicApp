import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeadsProvider } from '../../providers';

/**
 * Generated class for the SearchBeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bead',
  templateUrl: 'search-bead.html',
})
export class SearchBeadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public beadProvider: BeadsProvider ) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBeadPage');
  }

}

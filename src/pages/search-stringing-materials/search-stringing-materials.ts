import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StringWireProvider } from '../../providers';

/**
 * Generated class for the SearchStringingMaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-stringing-materials',
  templateUrl: 'search-stringing-materials.html',
})
export class SearchStringingMaterialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public stringWireProvider: StringWireProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchStringingMaterialsPage');
  }

}

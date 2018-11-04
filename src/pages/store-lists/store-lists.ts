import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralListProvider} from '../../providers/general-list/general-list';

/**
 * Generated class for the StoreListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-lists',
  templateUrl: 'store-lists.html',
})
export class StoreListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storeListProvider: GeneralListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreListsPage');
  }

}

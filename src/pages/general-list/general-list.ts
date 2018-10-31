import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { ProjectStoreListProvider } from '../../providers/project-store-list/project-store-list';


@IonicPage()
@Component({
  selector: 'page-general-list',
  templateUrl: 'general-list.html',
})
export class GeneralListPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralListPage');
  }

}

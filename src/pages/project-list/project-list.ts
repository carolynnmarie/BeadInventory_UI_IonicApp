import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { ProjectStoreListProvider } from '../../providers';

/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public projectListProvider: ProjectStoreListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }

}

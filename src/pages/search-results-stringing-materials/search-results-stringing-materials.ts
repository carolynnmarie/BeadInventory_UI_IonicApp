import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StringWireProvider } from '../../providers';

/**
 * Generated class for the SearchResultsStringingMaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results-stringing-materials',
  templateUrl: 'search-results-stringing-materials.html',
})
export class SearchResultsStringingMaterialsPage {

  stringingMaterials: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public stringingProvider: StringWireProvider) {
  }

  ionViewDidLoad() {
    this.stringingProvider.getAll().subscribe(stringingMaterials => 
      {this.stringingMaterials = stringingMaterials;});
  }

}

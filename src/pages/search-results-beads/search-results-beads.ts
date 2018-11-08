import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeadsProvider } from '../../providers';

/**
 * Generated class for the SearchResultsBeadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results-beads',
  templateUrl: 'search-results-beads.html',
})
export class SearchResultsBeadsPage {

  beads: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public beadProvider: BeadsProvider) {
  }

  ionViewDidLoad() {
    this.beadProvider.getAll().subscribe(beads =>
      {this.beads = beads;});
  }

  loadFull(){
    
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindingsProvider } from '../../providers';

/**
 * Generated class for the SearchResultsFindingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results-findings',
  templateUrl: 'search-results-findings.html',
})
export class SearchResultsFindingsPage {

  findings: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public findingProvider: FindingsProvider) {
  }

  ionViewDidLoad() {
    this.findingProvider.getAll().subscribe(findings => {this.findings = findings});
  }

}

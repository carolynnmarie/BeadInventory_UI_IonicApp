import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeadsProvider } from '../../providers/beads/beads';
import { FindingsProvider } from '../../providers/findings/findings';
import { StringWireProvider } from '../../providers/string-wire/string-wire';


interface PageItem {
  title: string
  component: any
}
type Page = PageItem


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  
  resultPage: Page;
  beads: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public beadProvider: BeadsProvider, 
    public findingsProvider: FindingsProvider, 
    public stringWireProvider: StringWireProvider) {

      this.resultPage = {title: "Search Results", component:'SearchResultsPage'}
  }

  ionViewDidLoad() {
    this.beadProvider.getBead().subscribe(beads=>{
      this.beads = beads;
    });
  }
  

  openPage(page: PageItem){
    this.navCtrl.setRoot(page.component)
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';


export interface PageItem {
  title: string
  component: any
}
type Pages = PageItem[]


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  
  pages: Pages;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.pages = [{title: "Search Beads", component:'SearchBeadPage'},
                  {title: "Search Findings", component: 'SearchFindingPage'},
                  {title:"Search Stringing Materials",component: 'SearchStringingMaterialsPage'}]
  }

  ionViewDidLoad() {
  }

  openPage(page: PageItem){
    this.navCtrl.push(page.component)
  }

}

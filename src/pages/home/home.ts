import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: PageList;

  constructor(public navCtrl: NavController) {
    this.pages = [{title: 'Search', component: 'SearchPage'}, {title: 'Store Lists', component:'StoreListsPage'}]
  }

  openPage(page: PageItem) {
    this.navCtrl.setRoot(page.component);
  }

}

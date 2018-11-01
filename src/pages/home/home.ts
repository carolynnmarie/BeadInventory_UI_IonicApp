import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/umd';

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
    this.pages = [{title: 'Search', component: 'SearchPage'}, {title: 'Store List', component:'StoreListPage'}]
  }

  openPage(page: PageItem) {
    this.navCtrl.setRoot(page.component);
  }

}

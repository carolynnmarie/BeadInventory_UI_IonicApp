import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { StoreListsPage } from '../store-lists/store-lists';
import { GeneralListPage } from '../general-list/general-list';
import { ProjectListPage } from '../project-list/project-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = GeneralListPage;
  tab4Root = ProjectListPage;

  constructor() {

  }
}

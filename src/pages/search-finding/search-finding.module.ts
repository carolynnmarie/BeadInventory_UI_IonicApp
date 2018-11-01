import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFindingPage } from './search-finding';

@NgModule({
  declarations: [
    SearchFindingPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFindingPage),
  ],
})
export class SearchFindingPageModule {}

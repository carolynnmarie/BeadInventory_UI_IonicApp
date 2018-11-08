import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsBeadsPage } from './search-results-beads';
import { BeadsProvider } from '../../providers';

@NgModule({
  declarations: [
    SearchResultsBeadsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsBeadsPage),
  ],
  providers: [
    BeadsProvider
  ]
})
export class SearchResultsBeadsPageModule {}

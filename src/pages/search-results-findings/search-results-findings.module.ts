import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsFindingsPage } from './search-results-findings';
import { FindingsProvider } from '../../providers';

@NgModule({
  declarations: [
    SearchResultsFindingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsFindingsPage),
  ],
  providers: [
    FindingsProvider
  ]
})
export class SearchResultsFindingsPageModule {}

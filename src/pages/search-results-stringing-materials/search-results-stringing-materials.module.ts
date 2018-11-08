import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsStringingMaterialsPage } from './search-results-stringing-materials';
import { StringWireProvider } from '../../providers';

@NgModule({
  declarations: [
    SearchResultsStringingMaterialsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsStringingMaterialsPage),
  ],
  providers: [
    StringWireProvider
  ]
})
export class SearchResultsStringingMaterialsPageModule {}

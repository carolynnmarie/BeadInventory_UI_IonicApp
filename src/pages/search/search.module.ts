import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { SearchPage } from './search';
import { BeadsProvider } from '../../providers/beads/beads';
import { FindingsProvider } from '../../providers/findings/findings';
import { StringWireProvider } from '../../providers/string-wire/string-wire';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
  providers: [
    BeadsProvider,
    FindingsProvider,
    StringWireProvider
  ],
  exports:[
    SearchPage
  ]
})
export class SearchPageModule {}

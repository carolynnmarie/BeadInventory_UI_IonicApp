import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { BeadsProvider } from '../../providers/beads/beads';
import { FindingsProvider } from '../../providers/findings/findings';
import { StringWireProvider } from '../../providers/string-wire/string-wire';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    HttpClientModule
  ],
  providers: [
    BeadsProvider,
    FindingsProvider,
    StringWireProvider
  ],
  // exports:[
  //   SearchPage
  // ]
})
export class SearchPageModule {}

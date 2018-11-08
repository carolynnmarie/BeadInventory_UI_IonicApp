import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { BeadsProvider, FindingsProvider, StringWireProvider } from '../../providers';
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
})
export class SearchPageModule {}

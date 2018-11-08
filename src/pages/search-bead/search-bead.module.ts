import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBeadPage } from './search-bead';
import { BeadsProvider } from '../../providers';

@NgModule({
  declarations: [
    SearchBeadPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBeadPage),
  ],
  providers: [
    BeadsProvider
  ]
})
export class SearchBeadPageModule {}

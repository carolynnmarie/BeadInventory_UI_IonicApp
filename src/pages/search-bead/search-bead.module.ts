import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBeadPage } from './search-bead';

@NgModule({
  declarations: [
    SearchBeadPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBeadPage),
  ],
})
export class SearchBeadPageModule {}

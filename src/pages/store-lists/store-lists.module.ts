import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreListsPage } from './store-lists';
import { HttpClientModule } from '@angular/common/http';
import { GeneralListProvider } from '../../providers';

@NgModule({
  declarations: [
    StoreListsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreListsPage),
    HttpClientModule
  ],
  providers: [
    GeneralListProvider,
  ]
})
export class StoreListsPageModule {}

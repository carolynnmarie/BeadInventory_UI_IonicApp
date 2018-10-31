import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { StoreListsPage } from './store-lists';
import { GeneralListPageModule } from '../general-list/general-list.module';
import { HttpClientModule } from '@angular/common/http';
import { GeneralListProvider } from '../../providers/general-list/general-list';
import { ProjectStoreListProvider } from '../../providers';

@NgModule({
  declarations: [
    StoreListsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreListsPage),
    GeneralListPageModule,
    StoreListsPageModule,
  ],
  exports: [
    StoreListsPage
  ],
  providers: [
    GeneralListProvider,
    ProjectStoreListProvider
  ]
})
export class StoreListsPageModule {}

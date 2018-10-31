import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { GeneralListPage } from './general-list';
import { ProjectStoreListProvider } from '../../providers/project-store-list/project-store-list';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListPageModule } from '../project-list/project-list.module';
import { GeneralListProvider } from '../../providers/general-list/general-list';

@NgModule({
  declarations: [
    GeneralListPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralListPage),
    HttpClientModule,
  ],
  providers: [
    GeneralListProvider
  ],
  exports: [
    GeneralListPage
  ]
})
export class GeneralListPageModule {}

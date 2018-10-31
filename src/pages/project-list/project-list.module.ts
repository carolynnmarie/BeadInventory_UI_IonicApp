import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ProjectListPage } from './project-list';
import { HttpClientModule } from '@angular/common/http';
import { ProjectStoreListProvider } from '../../providers';

@NgModule({
  declarations: [
    ProjectListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectListPage),
    HttpClientModule,
  ],
  providers: [
    ProjectStoreListProvider
  ],
  exports: [
    ProjectListPage
  ]
})
export class ProjectListPageModule {}

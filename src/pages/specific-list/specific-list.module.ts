import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificListPage } from './specific-list';

@NgModule({
  declarations: [
    SpecificListPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecificListPage),
  ],
})
export class SpecificListPageModule {}

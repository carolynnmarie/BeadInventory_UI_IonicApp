import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SearchStringingMaterialsPage } from './search-stringing-materials';

@NgModule({
  declarations: [
    SearchStringingMaterialsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchStringingMaterialsPage),
    TranslateModule.forChild()
  ],
})
export class SearchStringingMaterialsPageModule {}

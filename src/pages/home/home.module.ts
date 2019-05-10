import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
//import { BeadsProvider, FindingsProvider, StringWireProvider } from '../../providers';

import {HomePage} from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpClientModule,
    TranslateModule.forChild()
  ],
})
export class HomePageModule {}
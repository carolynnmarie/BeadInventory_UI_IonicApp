import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HomePage} from './home';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
//import { BeadsProvider, FindingsProvider, StringWireProvider } from '../../providers';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HttpClientModule
  ],
})
export class HomePageModule {}
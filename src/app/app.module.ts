import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/umd';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeadsProvider } from '../providers/beads/beads';
import { FindingsProvider } from '../providers/findings/findings';
import { StringWireProvider } from '../providers/string-wire/string-wire';
import { ProjectStoreListProvider } from '../providers/project-store-list/project-store-list';
import { SearchPage } from '../pages/search/search';
import { GeneralListPage } from '../pages/general-list/general-list';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageModule } from '../pages/search/search.module';
import { GeneralListPageModule } from '../pages/general-list/general-list.module';
import { GeneralListProvider } from '../providers/general-list/general-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    GeneralListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SearchPageModule,
    GeneralListPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    GeneralListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeneralListProvider,
  ]
})
export class AppModule {}

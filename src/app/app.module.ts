import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchPageModule } from '../pages/search/search.module';
import { StoreListsPage } from '../pages/store-lists/store-lists';
import { StoreListsPageModule } from '../pages/store-lists/store-lists.module';
import { HomePageModule } from '../pages/home/home.module';
import { TranslateModule, TranslateLoader } from '../../node_modules/@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp
 //   TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    HomePageModule,
    SearchPageModule,
    StoreListsPageModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    StoreListsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // ApiProvider,
    // BeadsProvider,
    // FindingsProvider,
    // StringWireProvider
  ]
})
export class AppModule {}

import { PatnerPage } from './../pages/patner/patner';
import { BlogPage } from './../pages/blog/blog';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { ServicesPage } from './../pages/services/services';
import { TeamPage } from './../pages/team/team';
import { AboutUsPage } from './../pages/about-us/about-us';
import { ProductListPage } from './../pages/product-list/product-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,ProductListPage,AboutUsPage,TeamPage, ServicesPage,ContactUsPage,BlogPage,PatnerPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage, ProductListPage,AboutUsPage,TeamPage,ServicesPage,ContactUsPage,BlogPage,PatnerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    
  ]
})
export class AppModule { }

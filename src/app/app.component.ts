import { BlogPage } from './../pages/blog/blog';
import { PatnerPage } from './../pages/patner/patner';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { ServicesPage } from './../pages/services/services';
import { TeamPage } from './../pages/team/team';
import { AboutUsPage } from './../pages/about-us/about-us';
import { ProductListPage } from './../pages/product-list/product-list';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;
  awards:Array<{img:string}>;

  constructor(public platform: Platform,public menu: MenuController,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
     { title: 'Home', component: HelloIonicPage },
     // { title: 'My First List', component: ListPage },
      { title: 'Products', component: ProductListPage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Team', component: TeamPage },
      { title: 'Services', component: ServicesPage },
      { title: 'Patners', component: PatnerPage },
      { title: 'Blog', component: BlogPage },
      { title: 'Contact Us', component: ContactUsPage }

    ];

    this.awards = [
      {img:'http://softpathtech.com/img/spt/part9.jpg'},
      {img:'http://softpathtech.com/img/spt/part10.jpg'},
      {img:'http://softpathtech.com/img/spt/part11jpg'},
      {img:'http://softpathtech.com/img/spt/part12.jpg'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

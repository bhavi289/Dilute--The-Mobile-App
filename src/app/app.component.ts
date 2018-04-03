import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public storage: Storage)
    {
        
                 this.storage.get('isLoggedIn').then((isLoggedIn) => {
                    if (isLoggedIn)
                    {
                        this.rootPage = HomePage;
                    }
                    else
                    {
                        this.rootPage = LoginPage;
                    }
                })
                this.platformReady();        
    }
    platformReady()
    {
        this.platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          this.statusBar.styleDefault();
          this.splashScreen.hide();

        });
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { GraphsPage } from '../pages/graphs/graphs';
import { Graphs_2Page } from '../pages/graphs-2/graphs-2';
import { Graphs_3Page } from '../pages/graphs-3/graphs-3';
import { Graphs_4Page } from '../pages/graphs-4/graphs-4';
import { Page1Page } from '../pages/page1/page1';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
@NgModule({
  declarations: [
    MyApp,
    // LoginPage,
    // HomePage,
    // ViewProfilePage,
    // GraphsPage,
    // Graphs_2Page,
    // Graphs_3Page,
    // Graphs_4Page,
    // Page1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ViewProfilePage,
    GraphsPage,
    Graphs_2Page,
    Graphs_3Page,
    Graphs_4Page,
    Page1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}

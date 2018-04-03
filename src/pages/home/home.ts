import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    Nav,
    MenuController,
    ToastController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { ViewProfilePage } from '../view-profile/view-profile';
import { GraphsPage } from '../graphs/graphs';
import { Graphs_2Page } from '../graphs-2/graphs-2';
import { Graphs_3Page } from '../graphs-3/graphs-3';
import { Graphs_4Page } from '../graphs-4/graphs-4';
import { Page1Page } from '../page1/page1';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  name: string;
  public distance
  public soilmoist;
  public temp;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad HomePage');
    this.storage.get('userData').then((val) => {
    	this.name=val['name'];
    })
    console.log("refreshing");
  }
  logout(){
  	this.storage.remove('userData');
        this.storage.set('isLoggedIn',false);
        this.storage.remove('userData');
        this.navCtrl.setRoot(LoginPage);
  }
  viewProfile(){
  	this.navCtrl.push(ViewProfilePage);
  }
  refresh(){
    this.ionViewDidLoad();
  }
  graphs(id:number){
    console.log("hi", id);
    this.navCtrl.push(GraphsPage, {"id":id})
    
  }
  
  graphs2(){
    this.storage.get('userData').then((val) => {
      this.authService.bathing(val['id']).subscribe((jsonResponse) => {
        console.log(jsonResponse);
        this.distance=jsonResponse.distance;
        console.log("hi", this.distance, jsonResponse.distance)
        this.soilmoist=jsonResponse.soilmoist;
        this.temp=jsonResponse.temp;
        this.navCtrl.push(Graphs_2Page, {"distance":this.distance, "soilmoist":this.soilmoist,"temp":this.temp});
        });
    })
  }
  graphs3(){
    this.storage.get('userData').then((val) => {
      this.authService.plants(val['id']).subscribe((jsonResponse) => {
        console.log(jsonResponse);
        this.distance=jsonResponse.distance;
        console.log("hi", this.distance, jsonResponse.distance)
        this.soilmoist=jsonResponse.soilmoist;
        this.temp=jsonResponse.temp;
        this.navCtrl.push(Graphs_3Page, {"distance":this.distance, "soilmoist":this.soilmoist,"temp":this.temp});
        });
    })
  }
  graphs4(){
    this.storage.get('userData').then((val) => {
      this.authService.car(val['id']).subscribe((jsonResponse) => {
        console.log(jsonResponse);
        this.distance=jsonResponse.distance;
        console.log("hi", this.distance, jsonResponse.distance)
        this.soilmoist=jsonResponse.soilmoist;
        this.temp=jsonResponse.temp;
        this.navCtrl.push(Graphs_4Page, {"distance":this.distance, "soilmoist":this.soilmoist,"temp":this.temp});
        });
    })
  }

}

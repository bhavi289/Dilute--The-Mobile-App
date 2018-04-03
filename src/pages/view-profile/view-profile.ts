import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  name: string;
  email : string;
  members: number;
  vehicles: number;
  address: string;
  plants: string;
  bathingWater_capacity:string;
  carWater_capacity:string;
  mainTank_capacity:string;
  plantWater_capacity:string;
  quantumTank_capacity:string;
  drinkingWater_capacity:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfilePage');
    this.storage.get('userData').then((val) => {
    	console.log(val);
    	this.name=val['name'];
    	this.email=val['email'];
    	this.address=val['address'];
    	this.members=val['members'];
    	this.vehicles=val['vehicles'];
    	this.plants=val['plants'];
      this.bathingWater_capacity=val['bathingWater_capacity'];
      this.carWater_capacity=val['carWater_capacity'];
      this.mainTank_capacity=val['mainTank_capacity'];
      this.plantWater_capacity=val['plantWater_capacity'];
      this.quantumTank_capacity=val['quantumTank_capacity'];
      this.drinkingWater_capacity=val['drinkingWater_capacity'];

    })
  }

}

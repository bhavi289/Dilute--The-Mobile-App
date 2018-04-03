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
  phone_no : string;
  members: number;
  vehicles: number;
  address: string;
  plant: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfilePage');
    this.storage.get('userData').then((val) => {
    	console.log(val);
    	this.name=val['name'];
    	this.phone_no=val['phone'];
    	this.address=val['address'];
    	this.members=val['membercount'];
    	this.vehicles=val['vehiclecount'];
    	this. plant=val['currentplant'];
    })
  }

}

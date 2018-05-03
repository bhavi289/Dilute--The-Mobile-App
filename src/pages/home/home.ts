import { Component, ViewChild } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    Nav,
    MenuController,
    ToastController,
    LoadingController,
    } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { ViewProfilePage } from '../view-profile/view-profile';
import { GraphsPage } from '../graphs/graphs';
import { Graphs_2Page } from '../graphs-2/graphs-2';
import { Graphs_3Page } from '../graphs-3/graphs-3';
import { Graphs_4Page } from '../graphs-4/graphs-4';
import { Page1Page } from '../page1/page1';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Chart } from 'chart.js';
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

@ViewChild('lineCanvas1') lineCanvas1;
@ViewChild('lineCanvas2') lineCanvas2;
@ViewChild('lineCanvas3') lineCanvas3;
@ViewChild('lineCanvas4') lineCanvas4;


  name: string;
  public distance
  public soilmoist;
    public temp;
    public DrinkingActuator: boolean;
    public BathingActuator :boolean;  
    public PlantsActuator :boolean;  
    public CarActuator: boolean; 
    public mode: boolean;
        
  label: any;
  drinking_distance: any;
  plant_distance: any;
  bathing_distance: any;
  car_distance: any;
  date: any;
  time: any;
    buttonColor: string = '#a3c6ff';
    buttonColor2: string = '#00307f';  

  data: string="latest_data";

  
  lineChart1: any;
  lineChart2: any;
  lineChart3: any;
  lineChart4: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
      this.DrinkingActuator = false;
      this.BathingActuator = true;
      this.PlantsActuator = false;
      this.CarActuator = true;
      this.mode = true;
      
    console.log('ionViewDidLoad HomePage');
    this.storage.get('userData').then((val) => {
    	this.name=val['name'];
    })
    console.log("refreshing");

    let loading = this.loadingCtrl.create({
                content: "<div>DILUTING out DATA.</div>",
                duration: 1000
            });
        loading.present();  

        this.storage.get('userData').then((val) => {

          this.authService.getCurrentData(val['email']).subscribe((jsonResponse) => {

          console.log(jsonResponse);
            this.drinking_distance = jsonResponse.drinking_distance;
            this.plant_distance = jsonResponse.plant_distance;
            this.bathing_distance = jsonResponse.bathing_distance;
            this.car_distance = jsonResponse.car_distance;
            this.date = jsonResponse.date;
            this.time = jsonResponse.time;

            this.plotGraph(this.drinking_distance, this.plant_distance, this.car_distance, this.bathing_distance);
            });            
      });

    
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

  date_wise_data(){
    this.navCtrl.push(GraphsPage);
  }
  

  plotGraph(drinking_distance: any, plant_distance: any, car_distance: any, bathing_distance: any){
      if(this.lineChart1){

      this.lineChart1.destroy();
      }
      this.lineChart1 = new Chart(this.lineCanvas1.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Drinking Water", "Empty"],
                datasets: [
                    {
                        label: ["ABCD"],
                        data: [drinking_distance, 100-drinking_distance],
                        borderColor : ['Gray','Gray'],
                        backgroundColor : ['Blue', 'Red'],
                        hoverBackgroundColor : ['Green', 'Red'],
                        hoverBorderWidth : [5, 5],
                        hoverBorderColor : ['Black', 'Black'],
                    }
                ]
            }
 
        });

        if(this.lineChart2){

      this.lineChart2.destroy();
      }
      this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Plant Water", "Empty"],
                datasets: [
                    {
                        label: ["ABCD"],
                        data: [plant_distance, 100-plant_distance],
                        borderColor : ['Gray','Gray'],
                        backgroundColor : ['Blue', 'Red'],
                        hoverBackgroundColor : ['Green', 'Red'],
                        hoverBorderWidth : [5, 5],
                        hoverBorderColor : ['Black', 'Black'],
                    }
                ]
            }
 
        });

        if(this.lineChart3){

      this.lineChart3.destroy();
      }
      this.lineChart3 = new Chart(this.lineCanvas3.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Bathing Water", "Empty"],
                datasets: [
                    {
                        label: ["ABCD"],
                        data: [bathing_distance, 100-bathing_distance],
                        borderColor : ['Gray','Gray'],
                        backgroundColor : ['Blue', 'Red'],
                        hoverBackgroundColor : ['Green', 'Red'],
                        hoverBorderWidth : [5, 5],
                        hoverBorderColor : ['Black', 'Black'],
                    }
                ]
            }
 
        });

        if(this.lineChart4){

      this.lineChart4.destroy();
      }
      this.lineChart4 = new Chart(this.lineCanvas4.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Car Water", "Empty"],
                datasets: [
                    {
                        label: ["ABCD"],
                        data: [car_distance, 100-car_distance],
                        borderColor : ['Gray','Gray'],
                        backgroundColor : ['Blue', 'Red'],
                        hoverBackgroundColor : ['Green', 'Red'],
                        hoverBorderWidth : [5, 5],
                        hoverBorderColor : ['Black', 'Black'],
                    }
                ]
            }
 
        });
    }
    switchOff(category: number) {
        console.log("SwitchingOff", category)
        if (category == 1) {
            this.DrinkingActuator = false;
        }
        else if (category == 2) {
            this.BathingActuator = false;
        }
        else if (category == 3) {
            this.PlantsActuator = false;
        }
        else if (category == 4) {
            this.CarActuator = false;
        }
    }
    switchOn(category: number) {
        console.log("SwitchinOn", category);
        if (category == 1) {
            this.DrinkingActuator = true;
        }
        else if (category == 2) {
            this.BathingActuator = true;
        }
        else if (category == 3) {
            this.PlantsActuator = true;
        }
        else if (category == 4) {
            this.CarActuator = true;
        }
    }

    changeMode(mode: number) {
        if (mode == 0) {
            this.mode = true;
        }
        else {
            this.mode = false;
        }
    }

}

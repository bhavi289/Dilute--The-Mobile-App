import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-graphs',
  templateUrl: 'graphs.html',
})
export class GraphsPage {
 
   
    @ViewChild('lineCanvas') lineCanvas;
    @ViewChild('lineCanvas2') lineCanvas2;
    @ViewChild('lineCanvas3') lineCanvas3;
    @ViewChild('lineCanvas4') lineCanvas4;

    
    public i=1;
   
    plant:any;
    id:any;
    distance:any;
    date:any;
    quantity:any;
    humidity:any;
    soilmoist:any;
    temp:any;
    time:any;

    lineChart4: any;
    lineChart3: any;
    lineChart2: any;
    lineChart1: any;
    label:any;

    drinking_distance : any;
    plant_distance : any;
    bathing_distance : any;
    car_distance : any;
    date_time : any;

    dateWiseData: {from?: string, to?: string} = {};
 
    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {
        //this.id=navParams.get("id");
    }
 
    ionViewDidLoad() {
        console.log("graphs.ts")
        let loading = this.loadingCtrl.create({
                content: "<div>DILUTING OUT DATA.</div>",
                duration: 1000
            });
        loading.present();       
        this.storage.get('userData').then((val) => {
            console.log(val['email']);
          this.authService.getQuantityDetails(val['email']).subscribe((jsonResponse) => {
                
                this.drinking_distance = jsonResponse.drinking_distance;
                this.plant_distance = jsonResponse.plant_distance;
                this.bathing_distance = jsonResponse.bathing_distance;
                this.car_distance = jsonResponse.car_distance;
                this.date_time = jsonResponse.date;

                console.log(this.drinking_distance, this.plant_distance, this.car_distance, this.bathing_distance, this.date_time);
                this.plotGraph(this.drinking_distance, this.plant_distance, this.car_distance, this.bathing_distance, this.date_time);
            });            
      });


 
    }
    refresh(){
    this.ionViewDidLoad();
  }

  findNewData( form: NgForm )
  {
        console.log("from");
        console.log("to");
  }

    plotGraph(drinking_distance:any, plant_distance: any, car_distance: any, bathing_distance: any, date_time: any){

    console.log("meh");
    console.log(date_time);
      if(this.lineChart1){
        this.lineChart1.destroy();
      }
      this.lineChart1 = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: date_time,
                datasets: [
                    {
                        label: "Quantity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0,0,255,0.4)",
                        borderColor: "rgba(0,0,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: drinking_distance,
                        spanGaps: false,
                    }
                ]
            }
 
        });

        if(this.lineChart2){
        this.lineChart2.destroy();
      }
      this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {

            type: 'line',
            data: {
                labels: date_time,
                datasets: [
                    {
                        label: "Quantity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0,0,255,0.4)",
                        borderColor: "rgba(0,0,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: plant_distance,
                        spanGaps: false,
                    }
                ]
            }
 
        });


        if(this.lineChart3){
        this.lineChart3.destroy();
      }
      this.lineChart3 = new Chart(this.lineCanvas3.nativeElement, {

            type: 'line',
            data: {
                labels: date_time,
                datasets: [
                    {
                        label: "Quantity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0,0,255,0.4)",
                        borderColor: "rgba(0,0,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: bathing_distance,
                        spanGaps: false,
                    }
                ]
            }
 
        });

        if(this.lineChart4){
        this.lineChart4.destroy();
      }
      this.lineChart4 = new Chart(this.lineCanvas4.nativeElement, {

            type: 'line',
            data: {
                labels: date_time,
                datasets: [
                    {
                        label: "Quantity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0,0,255,0.4)",
                        borderColor: "rgba(0,0,255,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: car_distance,
                        spanGaps: false,
                    }
                ]
            }
 
        });
    }
        

    }




 
 


import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
 
@Component({
  selector: 'page-graphs-2',
  templateUrl: 'graphs-2.html',
})
export class Graphs_2Page {
 
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    @ViewChild('line') lineCanvas2;
    
 
    data: any;

    distance:any;
    soilmoist:any;
    temp:any;

    barChart: any;
    doughnutChart: any;
    lineChart: any;
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.distance=navParams.get("distance")
        this.soilmoist=navParams.get("soilmoist")
        this.temp=navParams.get("temp")
    }
 
    ionViewDidLoad() {
        console.log("graphs.ts")
        console.log(this.distance,this.soilmoist)

        /*this.authService.waterLevel().subscribe((jsonResponse) => {

        });*/
 
        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6","7","8","9","10"],
                datasets: [{
                    label: 'pH number(0-14)',
                    data: this.temp,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
 
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
                datasets: [
                    {
                        label: "Water in Litres",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.distance,
                        spanGaps: false,
                    }
                ]
            }
 
        });
 
        this.lineChart = new Chart(this.lineCanvas2.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7","8","9","10"],
                datasets: [
                    {
                        label: "NTU",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.soilmoist,
                        spanGaps: false,
                    }
                ]
            }
 
        });
 
    }
    refresh(){
    this.ionViewDidLoad();
  }

 
 
}

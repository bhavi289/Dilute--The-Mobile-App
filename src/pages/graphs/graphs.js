var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
var GraphsPage = /** @class */ (function () {
    function GraphsPage(navCtrl, navParams, storage, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.i = 1;
        this.plant = navParams.get("plant");
    }
    GraphsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("graphs.ts");
        console.log(this.plant);
        console.log(this.distance, this.soilmoist);
        var loading = this.loadingCtrl.create({
            content: "<div>Data is Loading.</div>",
            duration: 10000000000000
        });
        loading.present();
        this.authService.dataByDate(this.i, 5, this.plant).subscribe(function (jsonResponse) {
            console.log("Response=", jsonResponse);
            _this.date = jsonResponse.date;
            _this.distance = jsonResponse.distance;
            _this.humidity = jsonResponse.humidity;
            _this.soilmoist = jsonResponse.soilmoist;
            _this.temp = jsonResponse.temp;
            _this.time = jsonResponse.time;
            if (_this.i == 1) {
                _this.label = [1, '', 2, '', 3, '', 4, '', 5, '', 6, '', 7, '', 8, '', 9, '', 10];
            }
            else if (_this.i == 2) {
                _this.label = [1, 2, 3, 4, 5, 6, 7];
            }
            else if (_this.i == 3) {
                _this.label = [1, '', 3, '', 5, '', 7, '', 9, '', 11, '', 13];
            }
            else if (_this.i == 4) {
                _this.label = [1, '', 3, '', 5, '', 7, '', 9, '', 11, '', 13, '', 15, '', 17, '', 19, '', 21, '', 23, '', 25, '', 27, '', 29];
            }
            _this.plotGraph(_this.label, _this.temp, _this.distance, _this.humidity, _this.soilmoist);
            loading.dismiss();
            console.log("label array=", _this.label);
            console.log(_this.date, _this.distance, _this.humidity, _this.soilmoist, _this.temp, _this.time);
        });
        /*this.authService.waterLevel().subscribe((jsonResponse) => {
  
        });*/
    };
    GraphsPage.prototype.refresh = function () {
        this.ionViewDidLoad();
    };
    GraphsPage.prototype.plotGraph = function (label, temp, distance, humidity, soilmoist) {
        // console.log("canvas=",this.lineCanvas.nativeElement);
        if (this.lineChart1) {
            console.log("hi im destroying", this.lineChart1);
            this.lineChart1.destroy();
        }
        this.lineChart1 = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Temperature",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,0,0,0.4)",
                        borderColor: "rgba(255,0,0,1)",
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
                        data: temp,
                        spanGaps: false,
                    }
                ]
            }
        });
        //this.lineChart.destroy();
        if (this.lineChart2) {
            console.log("hi im destroying", this.lineChart2);
            this.lineChart2.destroy();
        }
        this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
            type: 'line',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Soil Moisture",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0, 181, 81,0.4)",
                        borderColor: "rgba(0, 181, 81,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(0, 181, 81,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: soilmoist,
                        spanGaps: false,
                    }
                ]
            }
        });
        if (this.lineChart3) {
            console.log("hi im destroying", this.lineChart3);
            this.lineChart3.destroy();
        }
        this.lineChart3 = new Chart(this.lineCanvas3.nativeElement, {
            type: 'line',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Water Level",
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
                        data: distance,
                        spanGaps: false,
                    }
                ]
            }
        });
        if (this.lineChart4) {
            console.log("hi im destroying", this.lineChart4);
            this.lineChart4.destroy();
        }
        this.lineChart4 = new Chart(this.lineCanvas4.nativeElement, {
            type: 'line',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "Humidity",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(0, 0, 112,0.4)",
                        borderColor: "rgba(0, 0, 112,1)",
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
                        data: humidity,
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    GraphsPage.prototype.getData = function () {
        // this.authService.(val['id']).subscribe((jsonResponse) => {
        //     this.curPlant=jsonResponse.id;
        //     console.log("Current Plant is",this.curPlant);
        //     this.storage.set("curPlant",this.curPlant);
        //   });
    };
    GraphsPage.prototype.onSelectChange = function (selectedValue) {
        console.log('Selected', selectedValue);
        //this.storage.set('curPlant2',selectedValue);
        /*this.authService.dataByDate(selectedValue,5, this.plant).subscribe((jsonResponse) => {
           console.log("Response=",jsonResponse);
      });*/
        this.i = selectedValue;
        this.ionViewDidLoad();
    };
    __decorate([
        ViewChild('lineCanvas'),
        __metadata("design:type", Object)
    ], GraphsPage.prototype, "lineCanvas", void 0);
    __decorate([
        ViewChild('lineCanvas2'),
        __metadata("design:type", Object)
    ], GraphsPage.prototype, "lineCanvas2", void 0);
    __decorate([
        ViewChild('lineCanvas3'),
        __metadata("design:type", Object)
    ], GraphsPage.prototype, "lineCanvas3", void 0);
    __decorate([
        ViewChild('lineCanvas4'),
        __metadata("design:type", Object)
    ], GraphsPage.prototype, "lineCanvas4", void 0);
    GraphsPage = __decorate([
        Component({
            selector: 'page-graphs',
            templateUrl: 'graphs.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Storage, AuthServiceProvider, LoadingController])
    ], GraphsPage);
    return GraphsPage;
}());
export { GraphsPage };
//# sourceMappingURL=graphs.js.map
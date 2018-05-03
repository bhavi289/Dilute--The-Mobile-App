import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';-

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

    loginurl : string;
    drinkingurl : string;
    getQuantityDetailsurl : string;
    getCurrentDataurl : string;

    constructor(public http: Http) {
        console.log('Hello AuthServiceProvider Provider');
        this.http = http;
        this.loginurl = "http://127.0.0.1:8000/api/login/";
        this.getQuantityDetailsurl = "http://127.0.0.1:8000/api/getQuantityDetailsurl/";
        this.getCurrentDataurl = "http://127.0.0.1:8000/api/getCurrentData/"
        // this.drinkingurl = "http://127.0.0.1:8000/sensors/api/drinking/";
    }

    login(user_credentials) {
        let body = {
            "login":true,
            "json_data":user_credentials,
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.loginurl, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getQuantityDetails(email){
        let body = {
            "email":email,
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.getQuantityDetailsurl, body, options)
            .map(res => res.json())
            .catch(this.handleError);        
    }

    getCurrentData(email){
        let body = {
            "email":email,
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.getCurrentDataurl, body, options)
            .map(res => res.json())
            .catch(this.handleError);        
    }



    // drinking(id){
    //     let body = {
    //         "id":id,
    //         "res":6
    //     };

    //     let headers = new Headers({
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     });
    //     let options = new RequestOptions({ headers: headers});
    //     console.log("hi id = ",body);
    //     return this.http.post(this.drinkingurl, body, options)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    // bathing(id){
    //     let body = {
    //         "id":id,
    //         "res":7
    //     };

    //     let headers = new Headers({
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     });
    //     let options = new RequestOptions({ headers: headers});
    //     console.log("hi id = ",body);
    //     return this.http.post(this.drinkingurl, body, options)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    // plants(id){
    //     let body = {
    //         "id":id,
    //         "res":8
    //     };

    //     let headers = new Headers({
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     });
    //     let options = new RequestOptions({ headers: headers});
    //     console.log("hi id = ",body);
    //     return this.http.post(this.drinkingurl, body, options)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    // car(id){
    //     let body = {
    //         "id":id,
    //         "res":9
    //     };

    //     let headers = new Headers({
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     });
    //     let options = new RequestOptions({ headers: headers});
    //     console.log("hi id = ",body);
    //     return this.http.post(this.drinkingurl, body, options)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}


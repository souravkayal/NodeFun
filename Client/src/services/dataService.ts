import { Injectable } from '@angular/core';  
import { Http, Headers, RequestOptions, Response } from '@angular/http';  
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/toPromise';  
@Injectable()  
export class dataService {  

    apiUrl: string = 'http://localhost:3000/users/all_users';
    constructor(private _http: Http) { }  
    
    getData(): Observable<any> {  
        return this._http.get(this.apiUrl)  
            .map((res: Response) => res.json())  
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));  
        }  
}  
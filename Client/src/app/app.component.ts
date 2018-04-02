import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/toPromise';  

import { dataService } from '../services/dataService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [dataService]
})

export class AppComponent {
  title = 'app';

  constructor(private _dataService : dataService) { 
     this._dataService.getData().subscribe(f=> {
      console.log(JSON.stringify(f));
    })
  } 

}

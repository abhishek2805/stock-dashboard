import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { map } from 'rxjs/operators';
import { KeyValue } from '@angular/common';

import { FetchStockApiService } from '../fetch-stock-api.service';


@Component({
  selector: 'app-time-series-intraday',
  templateUrl: './time-series-intraday.component.html',
  styleUrls: ['./time-series-intraday.component.css']
})
export class TimeSeriesIntradayComponent implements OnInit {
  
  private restItems;
  private keysResponse;
  private valueResponse;
  
  constructor(private fetchStockApiService:FetchStockApiService) { }

  ngOnInit() {
  	this.getRestItems();
  }

  getRestItems(): void {
    this.fetchStockApiService.getRestItemUrl()
      .subscribe( restItems => {
          this.restItems = restItems['Time Series (5min)'];
          this.keysResponse = Object.keys(this.restItems)
          console.log(this.keysResponse);
          this.valueResponse = Object.values(this.restItems)
          console.log(this.valueResponse);
        }
      )
	// let goodResponse = [];
	
	// for (let prop of evilResponseProps) { 
	// 	goodResponse.push(evilResponseProps[prop]);
	// }
	// console.log(goodResponse);
  };


}

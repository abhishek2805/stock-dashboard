import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { FetchStockApiService } from '../fetch-stock-api.service';


@Component({
  selector: 'app-time-series-intraday',
  templateUrl: './time-series-intraday.component.html',
  styleUrls: ['./time-series-intraday.component.css']
})
export class TimeSeriesIntradayComponent implements OnInit {
  
  private restItems;
  
  constructor(private fetchStockApiService:FetchStockApiService) { }

  ngOnInit() {
  	this.getRestItems();
  }

  getRestItems(): void {
    this.fetchStockApiService.getRestItemUrl()
      .subscribe( restItems => {
          this.restItems = restItems['Time Series (5min)'];
          console.log(this.restItems);
        }
      )
  };

}

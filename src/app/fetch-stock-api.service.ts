import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchStockApiService {

	restIntraDayUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo';
	restDailyUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo';
	restWeeklyUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo';
	restMonthlyUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo';

  constructor(private http: HttpClient) { }
  	
  	getRestItemUrl (){
  		return this.http.get<any[]>(this.restIntraDayUrl).pipe(map(data => data));
	}

	getRestDailyUrl (){
  		return this.http.get<any[]>(this.restDailyUrl).pipe(map(data => data));
	}

	getRestWeeklyUrl (){
  		return this.http.get<any[]>(this.restWeeklyUrl).pipe(map(data => data));
	}

	getRestMonthlyUrl (){
  		return this.http.get<any[]>(this.restMonthlyUrl).pipe(map(data => data));
	}

}

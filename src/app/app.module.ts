import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { TimeSeriesIntradayComponent } from './time-series-intraday/time-series-intraday.component';
import { TimeSeriesDailyComponent } from './time-series-daily/time-series-daily.component';
import { TimeSeriesWeeklyComponent } from './time-series-weekly/time-series-weekly.component';
import { TimeSeriesMonthlyComponent } from './time-series-monthly/time-series-monthly.component';
import { HomeComponent } from './home/home.component';
import { ObjectKeyValuePipePipe } from './object-key-value-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeSeriesIntradayComponent,
    TimeSeriesDailyComponent,
    TimeSeriesWeeklyComponent,
    TimeSeriesMonthlyComponent,
    HomeComponent,
    ObjectKeyValuePipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

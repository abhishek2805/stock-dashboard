import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { TimeSeriesIntradayComponent } from './time-series-intraday/time-series-intraday.component';
import { TimeSeriesDailyComponent } from './time-series-daily/time-series-daily.component';
import { TimeSeriesWeeklyComponent } from './time-series-weekly/time-series-weekly.component';
import { TimeSeriesMonthlyComponent } from './time-series-monthly/time-series-monthly.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'intraday', component: TimeSeriesIntradayComponent },
  { path: 'daily', component: TimeSeriesDailyComponent },
  { path: 'weekly', component: TimeSeriesWeeklyComponent },
  { path: 'monthly', component: TimeSeriesMonthlyComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

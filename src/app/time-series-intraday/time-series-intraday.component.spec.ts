import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesIntradayComponent } from './time-series-intraday.component';

describe('TimeSeriesIntradayComponent', () => {
  let component: TimeSeriesIntradayComponent;
  let fixture: ComponentFixture<TimeSeriesIntradayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSeriesIntradayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesIntradayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

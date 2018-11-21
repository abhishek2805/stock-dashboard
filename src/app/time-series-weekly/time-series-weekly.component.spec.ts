import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesWeeklyComponent } from './time-series-weekly.component';

describe('TimeSeriesWeeklyComponent', () => {
  let component: TimeSeriesWeeklyComponent;
  let fixture: ComponentFixture<TimeSeriesWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSeriesWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

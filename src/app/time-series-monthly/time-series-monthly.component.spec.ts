import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesMonthlyComponent } from './time-series-monthly.component';

describe('TimeSeriesMonthlyComponent', () => {
  let component: TimeSeriesMonthlyComponent;
  let fixture: ComponentFixture<TimeSeriesMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSeriesMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

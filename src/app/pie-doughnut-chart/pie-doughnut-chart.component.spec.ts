import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDoughnutChartComponent } from './pie-doughnut-chart.component';

describe('PieDoughnutChartComponent', () => {
  let component: PieDoughnutChartComponent;
  let fixture: ComponentFixture<PieDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDoughnutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

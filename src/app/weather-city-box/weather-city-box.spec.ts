import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityBox } from './weather-city-box';

describe('WeatherCityBox', () => {
  let component: WeatherCityBox;
  let fixture: ComponentFixture<WeatherCityBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCityBox],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCityBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

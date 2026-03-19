import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSettings } from './weather-settings';

describe('WeatherSettings', () => {
  let component: WeatherSettings;
  let fixture: ComponentFixture<WeatherSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

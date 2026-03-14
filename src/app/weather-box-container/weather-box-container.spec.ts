import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoxContainer } from './weather-box-container';

describe('WeatherBoxContainer', () => {
  let component: WeatherBoxContainer;
  let fixture: ComponentFixture<WeatherBoxContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBoxContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherBoxContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

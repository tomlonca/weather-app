import { Component, Input, inject, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service';
import { BoxWeatherData } from '../weather-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-city-box',
  imports: [AsyncPipe],
  templateUrl: './weather-city-box.html',
  styleUrl: './weather-city-box.css',
})
export class WeatherCityBox implements OnInit {
  @Input({ required: true }) city = '';
  private weatherService = inject(WeatherService);

  data$: Observable<BoxWeatherData> | null = null;

  ngOnInit() {
    this.data$ = this.weatherService.getWeather(this.city);
  }
}
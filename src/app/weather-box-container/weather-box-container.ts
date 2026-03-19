import { Component, inject } from '@angular/core';
import { CitiesService } from '../cities-service';
import { WeatherCityBox } from '../weather-city-box/weather-city-box';

@Component({
  selector: 'app-weather-box-container',
  imports: [WeatherCityBox],
  templateUrl: './weather-box-container.html',
  styleUrl: './weather-box-container.css',
})
export class WeatherBoxContainer {
  WishedCities = inject(CitiesService); 

  onRemove(city: string) {
    this.WishedCities.deleteCity(city);
  }
}

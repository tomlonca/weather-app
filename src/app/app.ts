import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherBoxContainer } from './weather-box-container/weather-box-container';
import { SearchBarComponent } from './search-bar/search-bar';
import { WeatherSettings } from "./weather-settings/weather-settings";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherBoxContainer, SearchBarComponent, WeatherSettings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weather-app');
}

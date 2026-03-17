import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, forkJoin, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;
  private API_KEY = environment.API_KEY;
  
  getCities(cities: string[]): Observable<BoxWeatherData[]> {
    const requests = cities.map(city => this.getWeather(city));
    return forkJoin(requests);
  }

  getWeather(city: string): Observable<BoxWeatherData> {
    const url = `${this.API_URL}key=${this.API_KEY}&q=${encodeURIComponent(city)}`;

    return this.http.get<any>(url).pipe(
      map(response => this.formatWeatherData(response)),
      catchError(e => {
        console.error(`Failed to fetch weather for ${city}:`, e);
        throw e;
      })
    );
  }

  /**
   * @param data response from Weather API
   * 
   * @returns Formated data for each CityBox. some fields are number in order to calculate a unit conversion.
   */
  formatWeatherData(data : any) : BoxWeatherData {
    return {
      city: `${data.location.name}`,
      curr_temp: Number(data.current.temp_c),
      condition_text: `${data.current.condition.text}`,
      visibility:Number(data.current.vis_km),
      humidity: Number(data.current.humidity),
      wind:Number(data.current.wind_kph)
    };
}

}

export interface BoxWeatherData {
  city: string;
  curr_temp: number;
  condition_text: string;
  visibility: number;
  humidity: number;
  wind: number;
}

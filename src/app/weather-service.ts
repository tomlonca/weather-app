import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, forkJoin, map, Observable, timeout } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;
  private API_KEY = environment.API_KEY;
  
  getCities(cities: string[]) {
    const requests = cities.map(city => this.getWeather(city));
    return forkJoin(requests);
  }

  getWeather(city: string) {
    const url = `${this.API_URL}key=${this.API_KEY}&q=${encodeURIComponent(city)}`;

    return this.http.get<any>(url).pipe(
      timeout(5000),
      catchError(e => {
        console.error(`Failed to fetch weather for ${city}:`, e);
        throw e;
      })
    );
  }
}
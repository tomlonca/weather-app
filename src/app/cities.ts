import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CitiesService {
  cities = signal<string[]>([]);

  addCity(city: string) {
    this.cities.update(current => [...current, city]);
  }

  deleteCity(city: string) {
    this.cities.update(current => current.filter(c => c !== city));
  }
}
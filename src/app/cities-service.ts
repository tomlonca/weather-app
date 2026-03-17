import { Injectable, signal } from '@angular/core';


/**
 * Stores the list of cities to be displayed in boxes
 */
@Injectable({ providedIn: 'root' })
export class CitiesService {
  cities = signal<string[]>([]);

  addCity(city: string) {
    this.cities.update(current => [...current, city]);
    console.log(`> cities-service : ${city} added!`);
  }

  deleteCity(city: string) {
    this.cities.update(current => current.filter(c => c !== city));
  }
}
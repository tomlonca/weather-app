import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather-service';
import { AsyncPipe } from '@angular/common';
import { catchError, EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-weather-city-box',
  imports: [AsyncPipe],
  templateUrl: './weather-city-box.html',
  styleUrl: './weather-city-box.css',
})
export class WeatherCityBox implements OnInit {
  @Input({ required: true }) city = '';
  @Output() remove = new EventEmitter<void>();
  
  private weatherService = inject(WeatherService);
  data: Observable<any> | null = null;

  ngOnInit() {
  this.data = this.weatherService.getWeather(this.city).pipe(
    catchError(e => {
      this.remove.emit(); // Emit a remove signal to the parent if there is an error
      return EMPTY;
    })
  );
}
}
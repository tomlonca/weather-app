import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitiesService } from '../cities';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})

// search-bar.component.ts
export class SearchBarComponent {
  private citiesService = inject(CitiesService);
  query = '';

  onSearch() {
    this.citiesService.addCity(this.query);
    this.query = '';
  }
}
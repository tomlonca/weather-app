import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent {
  query = '';
  searched = output<string>();

  onSearch() {
      console.log('User is looking for ', this.query);
      this.query = ''; // Clean after parsing
  }

}
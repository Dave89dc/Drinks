import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  language!: FormControl;
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  searchView = {
    searchEN: 'Search drinks',
    searchES: 'Buscar bebidas',
    searchDE: 'Getränke suchen',
    searchFR: 'Rechercher des boissons',
    searchIT: 'Ricerca bevande',
    drinkEN: 'Drink',
    drinkES: 'Bebida',
    drinkDE: 'Getränk',
    drinkFR: 'Boisson',
    drinkIT: 'Bevanda',
  }

  constructor(private dataService: DataService){
    this.language = this.dataService.language;
  }

  onInput(event: any) {
    if (event.target) {
      const newSearchTerm = event.target.value;
      this.searchTerm = newSearchTerm;
      this.searchTermChange.emit(newSearchTerm);
    }
  }

}

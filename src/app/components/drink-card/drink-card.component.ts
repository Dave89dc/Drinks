import { Component, Input} from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkDetails } from 'src/app/models/drinkDetails';
import { DrinkDetailsComponent } from '../drink-details/drink-details.component';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent {

  language!: FormControl;
  @Input() drink!: Drink;
  @Input() drinkDetails!: DrinkDetails;
  @Input() isAlcoholic: boolean = true;

  drinkDetailsBtn = {
    detailsBtnEN: 'Details',
    detailsBtnES: 'Detalles',
    detailsBtnDE: 'Details',
    detailsBtnFR: 'Détails',
    detailsBtnIT: 'Dettagli'
  }

  constructor(private dataService: DataService){
    this.language = this.dataService.language;
  }

}

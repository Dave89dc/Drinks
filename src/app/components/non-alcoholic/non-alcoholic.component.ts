import { Component, OnInit, ViewChild } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DataService } from 'src/app/services/dataservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DrinkView } from 'src/app/models/drinkView';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.scss']
})
export class NonAlcoholicComponent implements OnInit {

  language!: FormControl;
  areTheDataFromTheDBavailable: boolean = true;
  loading: boolean = false;
  nonAlcoholicDrinks: Drink[] = [];
  filteredDrinks: Drink[] = [];
  currentPage: Drink[] = [];
  isAlcoholic = false;
  dataSource: MatTableDataSource<Drink> = new MatTableDataSource<Drink>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  drinksView: DrinkView = {
    titlePageEN: '"Non" Alcoholic Drinks',
    titlePageES: 'Bebidas "No" Alcohólicas',
    titlePageDE: '"Alkoholfreie" Getränke',
    titlePageFR: 'Boissons "Non" Alcoolisées',
    titlePageIT: 'Bevande "Non" Alcoliche',
    randomBtnEN: 'Random "Non" Alcoholic Drink',
    randomBtnES: 'Bebida "No" Alcohólica al Azar',
    randomBtnDE: 'Zufälliges "Alkoholfreie" Getränk',
    randomBtnFR: 'Boisson "Non" Alcoolisée Aléatoire',
    randomBtnIT: 'Bevanda Non Alcolica Casuale',
    drinksBtnEN: 'Alcoholic Drinks',
    drinksBtnES: 'Bebidas Alcohólicas',
    drinksBtnDE: 'Alkoholische Getränke',
    drinksBtnFR: 'Boissons Alcoolisées',
    drinksBtnIT: 'Bevande Alcoliche',
    loadingEN: 'Loading...',
    loadingES: 'Cargando...',
    loadingDE: 'Laden...',
    loadingFR: 'Chargement...',
    loadingIT: 'Caricamento...',
    noDataEN: "We're sorry, but there are server issues. Please try again later, thank you.",
    noDataES: 'Lo sentimos, pero hay problemas con el servidor. Por favor, inténtalo de nuevo más tarde, gracias.',
    noDataDE: 'Es tut uns leid, aber es gibt Serverprobleme. Bitte versuchen Sie es später erneut, vielen Dank.',
    noDataFR: 'Nous sommes désolés, mais il y a des problèmes avec le serveur. Veuillez réessayer plus tard, merci.',
    noDataIT: 'Siamo spiacenti ma ci sono problemi col server. Ti preghiamo di riprovare più tardi, grazie.'
  }

  constructor(private dataService: DataService){
    this.language = this.dataService.language;
  }

  ngOnInit(){
    this.loadNonAlcoholicDrinks('');
  }

  loadNonAlcoholicDrinks(newSearchTerm: string) {
    this.loading = true;
    this.dataService.getNonAlcoholicDrinks().subscribe({
      next: drinks => {
        this.nonAlcoholicDrinks = drinks;
        if(newSearchTerm !== ''){
          this.filteredDrinks = this.nonAlcoholicDrinks.filter(drink => drink.strDrink.toLowerCase().startsWith(newSearchTerm.toLowerCase()));
        } else {
          this.filteredDrinks = this.nonAlcoholicDrinks;
        }
        this.dataSource = new MatTableDataSource<Drink>(this.filteredDrinks);
        this.paginator.pageSize = 9;
        this.dataSource.paginator = this.paginator;
        this.currentPage = this.filteredDrinks.slice(0, this.paginator.pageSize);
        this.areTheDataFromTheDBavailable = true;
        console.log('db corretti: ', this.areTheDataFromTheDBavailable);
      },
      error: err => {
        console.log("Error: ", err);
        this.areTheDataFromTheDBavailable = false;
        console.log('error: ', this.areTheDataFromTheDBavailable);
      }
    })
    this.loading = false;
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.currentPage = this.filteredDrinks.slice(startIndex, endIndex);
  }

}

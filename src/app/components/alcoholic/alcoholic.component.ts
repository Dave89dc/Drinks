import { Component, OnInit, ViewChild } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DataService } from 'src/app/services/dataservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { DrinkView } from 'src/app/models/drinkView';

@Component({
  selector: 'app-alcoholic',
  templateUrl: './alcoholic.component.html',
  styleUrls: ['./alcoholic.component.scss']
})
export class AlcoholicComponent implements OnInit{

  language!: FormControl;
  loading: boolean = false;
  areTheDataFromTheDBavailable: boolean = true;
  alcoholicDrinks: Drink[] = [];
  filteredDrinks: Drink[] = [];
  currentPage: Drink[] = [];
  isAlcoholic = true;
  dataSource: MatTableDataSource<Drink> = new MatTableDataSource<Drink>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  drinksView: DrinkView = {
    titlePageEN: 'Alcoholic Drinks',
    titlePageES: 'Bebidas Alcohólicas',
    titlePageDE: 'Alkoholische Getränke',
    titlePageFR: 'Boissons Alcoolisées',
    titlePageIT: 'Bevande Alcoliche',
    randomBtnEN: 'Random Alcoholic Drink',
    randomBtnES: 'Bebida Alcohólica Al Azar',
    randomBtnDE: 'Zufälliges Alkoholisches Getränk',
    randomBtnFR: 'Boisson Alcoolisée Aléatoire',
    randomBtnIT: 'Bevanda Alcolica Casuale',
    drinksBtnEN: '"Non" Alcoholic Drinks',
    drinksBtnES: 'Bebidas "No" Alcohólicas',
    drinksBtnDE: '"Alkoholfreie" Getränke',
    drinksBtnFR: 'Boissons "Non" Alcoolisées',
    drinksBtnIT: 'Bevande "Non" Alcoliche',
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

  ngOnInit() {
    this.loadAlcoholicDrinks('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadAlcoholicDrinks(newSearchTerm: string) {
    this.loading = true;
    this.dataService.getAlcoholicDrinks().subscribe({
      next: drinks => {
        this.alcoholicDrinks = drinks;
        if(newSearchTerm !== ''){
          this.filteredDrinks = this.alcoholicDrinks.filter(drink => drink.strDrink.toLowerCase().startsWith(newSearchTerm.toLowerCase()));
        } else {
          this.filteredDrinks = this.alcoholicDrinks;
        }
        this.dataSource = new MatTableDataSource<Drink>(this.filteredDrinks);
        this.paginator.pageSize = 9;
        this.dataSource.paginator = this.paginator;
        this.currentPage = this.filteredDrinks.slice(0, this.paginator.pageSize);
        this.areTheDataFromTheDBavailable = true;
        console.log('Dati dal DB corretti: ', this.areTheDataFromTheDBavailable);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // onPageChange(event: any) {
  //   if (this.areTheDataFromTheDBavailable = true){
  //     const startIndex = event.pageIndex * event.pageSize;
  //     const endIndex = startIndex + event.pageSize;
  //     this.currentPage = this.filteredDrinks.slice(startIndex, endIndex);
  //   } else if (this.areTheDataFromTheDBavailable = false){
  //     this.currentPage = [];
  //   }
  // }

}

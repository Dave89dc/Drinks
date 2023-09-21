import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HomeView } from 'src/app/models/homeView';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  language!: FormControl;

  homeView: HomeView = {
    welcomeEN: 'Welcome to the world of drinks. Explore a variety of cocktails and mocktails, discover secret recipes, and be surprised by random drinks. Start exploring your favorite beverages.',
    welcomeES: 'Bienvenido al mundo de las bebidas. Explora una variedad de cócteles y mocktails, descubre recetas secretas y déjate sorprender por bebidas aleatorias. Comienza a explorar tus bebidas favoritas.',
    welcomeDE: 'Willkommen in der Welt der Getränke. Entdecken Sie eine Vielzahl von Cocktails und Mocktails, entdecken Sie geheime Rezepte und lassen Sie sich von zufälligen Getränken überraschen. Beginnen Sie, Ihre Lieblingsgetränke zu erkunden.',
    welcomeFR: 'Bienvenue dans le monde des boissons. Explorez une variété de cocktails et de mocktails, découvrez des recettes secrètes et laissez-vous surprendre par des boissons aléatoires. Commencez à explorer vos boissons préférées.',
    welcomeIT: 'Benvenuto nel mondo dei drink. Scopri una varietà di cocktail e mocktail, esplora ricette segrete e lasciati sorprendere da drink casuali. Inizia a esplorare le tue bevande preferite.',
    alcoholicBtnEN: 'Alcoholic Drinks',
    alcoholicBtnES: 'Bebidas Alcohólicas',
    alcoholicBtnDE: 'Alkoholische Getränke',
    alcoholicBtnFR: 'Boissons Alcoolisées',
    alcoholicBtnIT: 'Bevande Alcoliche',
    nonAlcoholicBtnEN: '"Non" Alcoholic Drinks',
    nonAlcoholicBtnES: 'Bebidas "No" Alcohólicas',
    nonAlcoholicBtnDE: '"Alkoholfreie" Getränke',
    nonAlcoholicBtnFR: 'Boissons "Non" Alcoolisées',
    nonAlcoholicBtnIT: 'Bevande "Non" Alcoliche',
    randomBtnEN: 'Random Drink',
    randomBtnES: 'Bebida Aleatorias',
    randomBtnDE: 'Zufälliges Getränk',
    randomBtnFR: 'Boisson Aléatoire',
    randomBtnIT: 'Bevanda Casuale'
  }

  constructor(private dataService: DataService){
    this.language = this.dataService.language;
  }

}

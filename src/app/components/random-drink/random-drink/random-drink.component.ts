import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DrinkDetails } from 'src/app/models/drinkDetails';
import { RandomDrinkView } from 'src/app/models/randomDrinkView';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.scss']
})
export class RandomDrinkComponent implements OnInit{

  language!: FormControl;
  areTheDataFromTheDBavailable: boolean = true;
  loading: boolean = false;
  drinkDetails?: DrinkDetails;
  areThereInstructions: boolean = true;
  areThereMeasures: boolean = false;
  instructions: string = '';
  instructionsEN: string = '';
  instructionsES: string = '';
  instructionsDE: string = '';
  instructionsFR: string = '';
  instructionsIT: string = '';
  ingredients: string[] = [];
  measures: string[] = [];
  ingredient1: string = '';
  ingredient2: string = '';
  ingredient3: string = '';
  ingredient4: string = '';
  ingredient5: string = '';
  ingredient6: string = '';
  ingredient7: string = '';
  ingredient8: string = '';
  ingredient9: string = '';
  ingredient10: string = '';
  ingredient11: string = '';
  ingredient12: string = '';
  ingredient13: string = '';
  ingredient14: string = '';
  ingredient15: string = '';
  measure1: string = '';
  measure2: string = '';
  measure3: string = '';
  measure4: string = '';
  measure5: string = '';
  measure6: string = '';
  measure7: string = '';
  measure8: string = '';
  measure9: string = '';
  measure10: string = '';
  measure11: string = '';
  measure12: string = '';
  measure13: string = '';
  measure14: string = '';
  measure15: string = '';

  randomView: RandomDrinkView = {
    randomTitlePageEN: 'Random Drink',
    randomTitlePageES: 'Bebida al Azar',
    randomTitlePageDE: 'Zufälliges Getränk',
    randomTitlePageFR: 'Boisson Aléatoire',
    randomTitlePageIT: 'Bevanda Casuale',
    randomRefreshBtnEN: 'Refresh',
    randomRefreshBtnES: 'Actualizar',
    randomRefreshBtnDE: 'Aktualisieren',
    randomRefreshBtnFR: 'Actualiser',
    randomRefreshBtnIT: 'Ricarica',
    randomCategoryEN: 'Category: ',
    randomCategoryES: 'Categoría: ',
    randomCategoryDE: 'Kategorie: ',
    randomCategoryFR: 'Catégorie : ',
    randomCategoryIT: 'Categoria: ',
    randomAlcoholicEN: 'Alcohol: ',
    randomAlcoholicES: 'Alcohol: ',
    randomAlcoholicDE: 'Alkohol: ',
    randomAlcoholicFR: 'Alcool : ',
    randomAlcoholicIT: 'Alcool: ',
    randomGlassEN: 'Glass: ',
    randomGlassES: 'Vaso: ',
    randomGlassDE: 'Glas: ',
    randomGlassFR: 'Verre : ',
    randomGlassIT: 'Bicchiere: ',
    randomIngredientsEN: 'Ingredients:',
    randomIngredientsES: 'Ingredientes:',
    randomIngredientsDE: 'Zutaten:',
    randomIngredientsFR: 'Ingrédients :',
    randomIngredientsIT: 'Ingredienti:',
    randomInstructionsEN: 'Instructions:',
    randomInstructionsES: 'Instrucciones:',
    randomInstructionsDE: 'Anweisungen:',
    randomInstructionsFR: 'Instructions :',
    randomInstructionsIT: 'Istruzioni:',
    goToBtnEN: 'Go to:',
    goToBtnES: 'Ir a:',
    goToBtnDE: 'Gehe zu:',
    goToBtnFR: 'Aller à :',
    goToBtnIT: 'Vai a:',
    AlcoholicDrinksBtnEN: 'Alcoholic Drinks',
    AlcoholicDrinksBtnES: 'Bebidas Alcohólicas',
    AlcoholicDrinksBtnDE: 'Alkoholische Getränke',
    AlcoholicDrinksBtnFR: 'Boissons Alcoolisées',
    AlcoholicDrinksBtnIT: 'Bevande Alcoliche',
    NonAlcoholicDrinksBtnEN: '"Non" Alcoholic Drinks',
    NonAlcoholicDrinksBtnES: 'Bebidas "No" Alcohólicas',
    NonAlcoholicDrinksBtnDE: '"Alkoholfreie" Getränke',
    NonAlcoholicDrinksBtnFR: 'Boissons "Non" Alcoolisées',
    NonAlcoholicDrinksBtnIT: 'Bevande "Non" Alcoliche',
    RandomDrinkBtnEN: 'Random Drink',
    RandomDrinkBtnES: 'Bebida Al Azar',
    RandomDrinkBtnDE: 'Zufälliges Getränk',
    RandomDrinkBtnFR: 'Boisson Aléatoire',
    RandomDrinkBtnIT: 'Bevanda Casuale',
    loadingEN: 'Loading...',
    loadingES: 'Cargando...',
    loadingDE: 'Laden...',
    loadingFR: 'Chargement...',
    loadingIT: 'Caricamento...',
    noTranslationEN: "We're sorry, but there is no translation of the instructions to prepare this drink in English.",
    noTranslationES: "Lamentamos informarte que no hay traducción de las instrucciones para preparar esta bebida en español.",
    noTranslationDE: "Es tut uns leid, aber es gibt keine Übersetzung der Anleitung zur Zubereitung dieses Getränks auf Deutsch.",
    noTranslationFR: "Nous sommes désolés, mais il n'y a pas de traduction des instructions pour préparer cette boisson en français.",
    noTranslationIT: "Siamo spiacenti ma non c'è la traduzione delle istruzioni per preparare questo drink in italiano.",
    noInstructionsEN: "We're sorry, but there are no instructions for preparing this drink.",
    noInstructionsES: "Lamentamos, pero no hay instrucciones para preparar esta bebida.",
    noInstructionsDE: "Es tut uns leid, aber es gibt keine Anweisungen zur Zubereitung dieses Getränks.",
    noInstructionsFR: "Nous sommes désolés, mais il n'y a pas d'instructions pour préparer cette boisson.",
    noInstructionsIT: "Siamo spiacenti ma non ci sono istruzioni per la preparazione di questa bevanda.",
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
    if(this.language.valueChanges){
      this.language.valueChanges.subscribe(newValue => {
        this.randomDrinkDetailsIfChangeLanguage();
    });
    }
    this.loadRandomDrinkDetails();
  }

  loadRandomDrinkDetails(){
    this.loading = true;
    this.instructions = '';
    this.ingredients = [];
    this.measures = [];
    this.dataService.getRandomDrink().subscribe({
      next: drinkDetails => {
        this.drinkDetails = drinkDetails;
        console.log('Drink details: ', this.drinkDetails);
        if(this.drinkDetails.strIngredient1 !== null){this.ingredient1 = this.drinkDetails.strIngredient1; this.ingredients.push(this.ingredient1);}
          if(this.drinkDetails.strMeasure1 === null){this.measure1 = ''; this.measures.push(this.measure1);}
          if(this.drinkDetails.strMeasure1 !== null){this.measure1 = this.drinkDetails.strMeasure1; this.measures.push(this.measure1);}
          if(this.drinkDetails.strIngredient2 !== null){this.ingredient2 = this.drinkDetails.strIngredient2; this.ingredients.push(this.ingredient2);}
          if(this.drinkDetails.strMeasure2 === null){this.measure2 = ''; this.measures.push(this.measure2);}
          if(this.drinkDetails.strMeasure2 !== null){this.measure2 = this.drinkDetails.strMeasure2; this.measures.push(this.measure2);}
          if(this.drinkDetails.strIngredient3 !== null){this.ingredient3 = this.drinkDetails.strIngredient3; this.ingredients.push(this.ingredient3);}
          if(this.drinkDetails.strMeasure3 === null){this.measure3 = ''; this.measures.push(this.measure3);}
          if(this.drinkDetails.strMeasure3 !== null){this.measure3 = this.drinkDetails.strMeasure3; this.measures.push(this.measure3);}
          if(this.drinkDetails.strIngredient4 !== null){this.ingredient4 = this.drinkDetails.strIngredient4; this.ingredients.push(this.ingredient4);}
          if(this.drinkDetails.strMeasure4 === null){this.measure4 = ''; this.measures.push(this.measure4);}
          if(this.drinkDetails.strMeasure4 !== null){this.measure4 = this.drinkDetails.strMeasure4; this.measures.push(this.measure4);}
          if(this.drinkDetails.strIngredient5 !== null){this.ingredient5 = this.drinkDetails.strIngredient5; this.ingredients.push(this.ingredient5);}
          if(this.drinkDetails.strMeasure5 === null){this.measure5 = ''; this.measures.push(this.measure5);}
          if(this.drinkDetails.strMeasure5 !== null){this.measure5 = this.drinkDetails.strMeasure5; this.measures.push(this.measure5);}
          if(this.drinkDetails.strIngredient6 !== null){this.ingredient6 = this.drinkDetails.strIngredient6; this.ingredients.push(this.ingredient6);}
          if(this.drinkDetails.strMeasure6 === null){this.measure6 = ''; this.measures.push(this.measure6);}
          if(this.drinkDetails.strMeasure6 !== null){this.measure6 = this.drinkDetails.strMeasure6; this.measures.push(this.measure6);}
          if(this.drinkDetails.strIngredient7 !== null){this.ingredient7 = this.drinkDetails.strIngredient7; this.ingredients.push(this.ingredient7);}
          if(this.drinkDetails.strMeasure7 === null){this.measure7 = ''; this.measures.push(this.measure7);}
          if(this.drinkDetails.strMeasure7 !== null){this.measure7 = this.drinkDetails.strMeasure7; this.measures.push(this.measure7);}
          if(this.drinkDetails.strIngredient8 !== null){this.ingredient8 = this.drinkDetails.strIngredient8; this.ingredients.push(this.ingredient8);}
          if(this.drinkDetails.strMeasure8 === null){this.measure8 = ''; this.measures.push(this.measure8);}
          if(this.drinkDetails.strMeasure8 !== null){this.measure8 = this.drinkDetails.strMeasure8; this.measures.push(this.measure8);}
          if(this.drinkDetails.strIngredient9 !== null){this.ingredient9 = this.drinkDetails.strIngredient9; this.ingredients.push(this.ingredient9);}
          if(this.drinkDetails.strMeasure9 === null){this.measure9 = ''; this.measures.push(this.measure9);}
          if(this.drinkDetails.strMeasure9 !== null){this.measure9 = this.drinkDetails.strMeasure9; this.measures.push(this.measure9);}
          if(this.drinkDetails.strIngredient10 !== null){this.ingredient10 = this.drinkDetails.strIngredient10; this.ingredients.push(this.ingredient10);}
          if(this.drinkDetails.strMeasure10 === null){this.measure10 = ''; this.measures.push(this.measure10);}
          if(this.drinkDetails.strMeasure10 !== null){this.measure10 = this.drinkDetails.strMeasure10; this.measures.push(this.measure10);}
          if(this.drinkDetails.strIngredient11 !== null){this.ingredient11 = this.drinkDetails.strIngredient11; this.ingredients.push(this.ingredient11);}
          if(this.drinkDetails.strMeasure11 === null){this.measure11 = ''; this.measures.push(this.measure11);}
          if(this.drinkDetails.strMeasure11 !== null){this.measure11 = this.drinkDetails.strMeasure11; this.measures.push(this.measure11);}
          if(this.drinkDetails.strIngredient12 !== null){this.ingredient12 = this.drinkDetails.strIngredient12; this.ingredients.push(this.ingredient12);}
          if(this.drinkDetails.strMeasure12 === null){this.measure12 = ''; this.measures.push(this.measure12);}
          if(this.drinkDetails.strMeasure12 !== null){this.measure12 = this.drinkDetails.strMeasure12; this.measures.push(this.measure12);}
          if(this.drinkDetails.strIngredient13 !== null){this.ingredient13 = this.drinkDetails.strIngredient13; this.ingredients.push(this.ingredient13);}
          if(this.drinkDetails.strMeasure13 === null){this.measure13 = ''; this.measures.push(this.measure13);}
          if(this.drinkDetails.strMeasure13 !== null){this.measure13 = this.drinkDetails.strMeasure13; this.measures.push(this.measure13);}
          if(this.drinkDetails.strIngredient14 !== null){this.ingredient14 = this.drinkDetails.strIngredient14; this.ingredients.push(this.ingredient14);}
          if(this.drinkDetails.strMeasure14 === null){this.measure14 = ''; this.measures.push(this.measure14);}
          if(this.drinkDetails.strMeasure14 !== null){this.measure14 = this.drinkDetails.strMeasure14; this.measures.push(this.measure14);}
          if(this.drinkDetails.strIngredient15 !== null){this.ingredient15 = this.drinkDetails.strIngredient15; this.ingredients.push(this.ingredient15);}
          if(this.drinkDetails.strMeasure15 === null){this.measure15 = ''; this.measures.push(this.measure15);}
          if(this.drinkDetails.strMeasure15 !== null){this.measure15 = this.drinkDetails.strMeasure15; this.measures.push(this.measure15);}
        if(this.language.value === 'English'){
          if(this.drinkDetails.strInstructions !== null){
            if(this.drinkDetails.strInstructions.endsWith('.')){
              this.instructions = this.drinkDetails.strInstructions;
              this.instructionsEN = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            } else {
              this.instructions = this.drinkDetails.strInstructions + '.';
              this.instructionsEN = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            }
          } else if (this.drinkDetails.strInstructions === null){
            this.instructionsEN = this.randomView.noTranslationEN;
          }
        }
        if(this.language.value === 'Español'){
          if(this.drinkDetails.strInstructionsES !== null){
            if(this.drinkDetails.strInstructionsES.endsWith('.')){
              this.instructions = this.drinkDetails.strInstructionsES;
              this.instructionsES = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            } else {
              this.instructions = this.drinkDetails.strInstructionsES + '.';
              this.instructionsES = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            }
          } else if (this.drinkDetails.strInstructionsES === null){
            this.instructionsES = this.randomView.noTranslationES;
          }
        }
        if(this.language.value === 'Deutsch'){
          if(this.drinkDetails.strInstructionsDE !== null){
            if(this.drinkDetails.strInstructionsDE.endsWith('.')){
              this.instructions = this.drinkDetails.strInstructionsDE;
              this.instructionsDE = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            } else {
              this.instructions = this.drinkDetails.strInstructionsDE + '.';
              this.instructionsDE = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            }
          } else if (this.drinkDetails.strInstructionsDE === null){
            this.instructionsDE = this.randomView.noTranslationDE;
          }
        }
        if(this.language.value === 'Français'){
          if(this.drinkDetails.strInstructionsFR !== null){
            if(this.drinkDetails.strInstructionsFR.endsWith('.')){
              this.instructions = this.drinkDetails.strInstructionsFR;
              this.instructionsFR = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            } else {
              this.instructions = this.drinkDetails.strInstructionsFR + '.';
              this.instructionsFR = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            }
          } else if (this.drinkDetails.strInstructionsFR === null){
            this.instructionsFR = this.randomView.noTranslationFR;
          }
        }
        if(this.language.value === 'Italiano'){
          if(this.drinkDetails.strInstructionsIT !== null){
            if(this.drinkDetails.strInstructionsIT.endsWith('.')){
              this.instructions = this.drinkDetails.strInstructionsIT;
              this.instructionsIT = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            } else {
              this.instructions = this.drinkDetails.strInstructionsIT + '.';
              this.instructionsIT = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
            }
          } else if (this.drinkDetails.strInstructionsIT === null){
            this.instructionsIT = this.randomView.noTranslationIT;
          }
        }
        if(this.drinkDetails.strInstructions === null &&
           this.drinkDetails.strInstructionsES === null &&
           this.drinkDetails.strInstructionsDE === null &&
           this.drinkDetails.strInstructionsFR === null &&
           this.drinkDetails.strInstructionsIT === null){
          this.areThereInstructions === false;
        }
        this.loading = false;
        this.areThereMeasures = this.measures.some(element => element !== '');
        this.areTheDataFromTheDBavailable = true;
        console.log('Dati dal DB corretti: ', this.areTheDataFromTheDBavailable);
      },
      error: err => {
        console.log("Error: ", err);
        this.areTheDataFromTheDBavailable = false;
        console.log('error: ', this.areTheDataFromTheDBavailable);
        this.loading = false;
      }
    })
  }

  randomDrinkDetailsIfChangeLanguage(){
    this.instructionsEN = '';
    this.instructionsES = '';
    this.instructionsDE = '';
    this.instructionsFR = '';
    this.instructionsIT = '';
    if(this.drinkDetails){
      if(this.language.value === 'English'){
        if(this.drinkDetails.strInstructions !== null){
          if(this.drinkDetails.strInstructions.endsWith('.')){
            this.instructions = this.drinkDetails.strInstructions;
            this.instructionsEN = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          } else {
            this.instructions = this.drinkDetails.strInstructions + '.';
            this.instructionsEN = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          }
        } else if (this.drinkDetails.strInstructions === null){
          this.instructionsEN = this.randomView.noTranslationEN;
        }
      }
      if(this.language.value === 'Español'){
        if(this.drinkDetails.strInstructionsES !== null){
          if(this.drinkDetails.strInstructionsES.endsWith('.')){
            this.instructions = this.drinkDetails.strInstructionsES;
            this.instructionsES = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          } else {
            this.instructions = this.drinkDetails.strInstructionsES + '.';
            this.instructionsES = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          }
        } else if (this.drinkDetails.strInstructionsES === null){
          this.instructionsES = this.randomView.noTranslationES;
        }
      }
      if(this.language.value === 'Deutsch'){
        if(this.drinkDetails.strInstructionsDE !== null){
          if(this.drinkDetails.strInstructionsDE.endsWith('.')){
            this.instructions = this.drinkDetails.strInstructionsDE;
            this.instructionsDE = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          } else {
            this.instructions = this.drinkDetails.strInstructionsDE + '.';
            this.instructionsDE = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          }
        } else if (this.drinkDetails.strInstructionsDE === null){
          this.instructionsDE = this.randomView.noTranslationDE;
        }
      }
      if(this.language.value === 'Français'){
        if(this.drinkDetails.strInstructionsFR !== null){
          if(this.drinkDetails.strInstructionsFR.endsWith('.')){
            this.instructions = this.drinkDetails.strInstructionsFR;
            this.instructionsFR = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          } else {
            this.instructions = this.drinkDetails.strInstructionsFR + '.';
            this.instructionsFR = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          }
        } else if (this.drinkDetails.strInstructionsFR === null){
          this.instructionsFR = this.randomView.noTranslationFR;
        }
      }
      if(this.language.value === 'Italiano'){
        if(this.drinkDetails.strInstructionsIT !== null){
          if(this.drinkDetails.strInstructionsIT.endsWith('.')){
            this.instructions = this.drinkDetails.strInstructionsIT;
            this.instructionsIT = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          } else {
            this.instructions = this.drinkDetails.strInstructionsIT + '.';
            this.instructionsIT = this.instructions.slice(0, 1).toUpperCase() + this.instructions.slice(1);
          }
        } else if (this.drinkDetails.strInstructionsIT === null){
          this.instructionsIT = this.randomView.noTranslationIT;
        }
      }
      if(this.drinkDetails.strInstructions === null &&
         this.drinkDetails.strInstructionsES === null &&
         this.drinkDetails.strInstructionsDE === null &&
         this.drinkDetails.strInstructionsFR === null &&
         this.drinkDetails.strInstructionsIT){
          this.areThereInstructions === false;
      }
    }
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { Drink } from '../models/drink';
import { DrinkDetails } from '../models/drinkDetails';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  drinksURL = 'https://www.thecocktaildb.com/api/json/v2/1/filter.php?a=';
  idDrinksURL = 'https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=';
  NameDrinksURL = 'https://www.thecocktaildb.com/api/json/v2/1/search.php?s=';
  randomDrinkURL = 'https://www.thecocktaildb.com/api/json/v2/1/random.php';

  _language = new FormControl('English');

  constructor(private http: HttpClient) {}

  // Chiamata usata dal componente AlcoholicComponent:

  getAlcoholicDrinks(): Observable<Drink[]> {
    return this.http.get<any>(this.drinksURL + 'Alcoholic').pipe(
      map(data => data.drinks),
      switchMap(drinks => {
        if (drinks === 'None Found') {
          return throwError(() => createHttpError(404, 'Dati non trovati'));
        }
        return of(drinks);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Errore nella richiesta:', error);
        return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
      })
    );
  }

  // Chiamata usata dal componente NonAlcoholicComponent:

  getNonAlcoholicDrinks(): Observable<Drink[]> {
    return this.http.get<any>(this.drinksURL + 'Non_Alcoholic').pipe(
      map(data => data.drinks),
      switchMap(drinks => {
        if (drinks === 'None Found') {
          return throwError(() => createHttpError(404, 'Dati non trovati'));
        }
        return of(drinks);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Errore nella richiesta:', error);
        return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
      })
    );
  }

  // Chiamata usata dai componenti AlcoholicComponent e NonAlcoholicComponent quando si seleziona
  // una bevanda per visualizzarne i dettagli, la quale utilizza l'id della bevanda stessa selezionata:

  getDrinksById(id: string): Observable<DrinkDetails> {
    return this.http.get<any>(this.idDrinksURL + id).pipe(
      map(data => {
        if (data.drinks === 'None Found') {
          return throwError(() => createHttpError(404, 'Dati non trovati'));
        } else {
          return data.drinks[0];
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Errore nella richiesta:', error);
        return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
      })
    );
  }

  // Chiamata usata dai componenti RandomDrink, RandomAlcoholicDrink e RandomNonAlcoholicDrink
  // per genereare una bevanda a caso dal DB e visualizzarne i dettagli:

  getRandomDrink(): Observable<DrinkDetails> {
    return this.http.get<any>(this.randomDrinkURL).pipe(
      map(data => {
        if (data.drinks === 'None Found') {
          return throwError(() => createHttpError(404, 'Dati non trovati'));
        } else {
          return data.drinks[0];
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Errore nella richiesta:', error);
        return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
      })
    );
  }

  // la get che controlla lo stato di language e che viene utilizzata poi da tutti i componenti:

  get language(): FormControl {
    return this._language;
  }

  // PROVE:

  // getAlcoholicDrinks(): Observable<Drink[]>{
  //   return this.http.get<any>(this.drinksURL + 'Alcoholi').pipe(
  //     switchMap(data => {
  //       const drinks = data.drinks;
  //       const getArray = [];
  //       getArray.push(drinks);
  //       return getArray;
  //     })
  //   )
  // }

  // getNonAlcoholicDrinks(): Observable<Drink[]>{
  //   return this.http.get<any>(this.drinksURL + 'Non_Alcoholic').pipe(
  //     switchMap(data => {
  //       const drinks = data.drinks;
  //       const getArray = [];
  //       getArray.push(drinks);
  //       return getArray;
  //     })
  //   )
  // }

  // getNonAlcoholicDrinks(): Observable<Drink[]> {
  //   return this.http.get<any>(this.drinksURL + 'Non_Alcoholic').pipe(
  //     map(data => data.drinks),
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Errore nella richiesta:', error);
  //       return throwError(() => createHttpError(error.status, 'Errore nella richiesta'));
  //     })
  //   );
  // }

  // getDrinksById(id: string): Observable<DrinkDetails>{
  //   return this.http.get<any>(this.idDrinksURL + id).pipe(
  //     switchMap(data => {
  //       const drinks = data.drinks[0];
  //       const getArray = [];
  //       getArray.push(drinks);
  //       return getArray;
  //     })
  //   )
  // }

  // getRandomDrink(): Observable<DrinkDetails>{
  //   return this.http.get<any>(this.randomDrinkURL).pipe(
  //     switchMap(data => {
  //       const drinks = data.drinks[0];
  //       const getArray = [];
  //       getArray.push(drinks);
  //       return getArray;
  //     })
  //   )
  // }

}

// Funzione creata dal createHttpError delle funzioni di chiamata qua sopra elencate:

function createHttpError(status: number, message: string): Error {
  const error = new Error(message);
  (error as any).status = status; // Aggiunge una proprietà "status" all'oggetto di errore
  return error;
}


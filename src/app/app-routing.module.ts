import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AlcoholicComponent } from './components/alcoholic/alcoholic.component';
import { NonAlcoholicComponent } from './components/non-alcoholic/non-alcoholic.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { RandomDrinkComponent } from './components/random-drink/random-drink/random-drink.component';
import { RandomAlcoholicDrinkComponent } from './components/random-alcoholic-drink/random-alcoholic-drink.component';
import { RandomNonAlcoholicDrinkComponent } from './components/random-non-alcoholic-drink/random-non-alcoholic-drink.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'random-drink', component: RandomDrinkComponent },
  { path: 'alcoholic-drinks', component: AlcoholicComponent },
  { path: 'non-alcoholic-drinks', component: NonAlcoholicComponent },
  { path: 'alcoholic-drinks/random-alcoholic-drink', component: RandomAlcoholicDrinkComponent },
  { path: 'non-alcoholic-drinks/random-non-alcoholic-drink', component: RandomNonAlcoholicDrinkComponent },
  { path: 'alcoholic-drinks/drink-details/:id', component: DrinkDetailsComponent },
  { path: 'non-alcoholic-drinks/drink-details/:id', component: DrinkDetailsComponent },
  { path: 'alcoholic-drinks/drink-details/:id/:name', component: DrinkDetailsComponent },
  { path: 'non-alcoholic-drinks/drink-details/:id/:name', component: DrinkDetailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlcoholicComponent } from './components/alcoholic/alcoholic.component';
import { NonAlcoholicComponent } from './components/non-alcoholic/non-alcoholic.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { ReplaceSpacesPipe } from './pipes/replace-spaces.pipe';
import { RandomDrinkComponent } from './components/random-drink/random-drink/random-drink.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RandomAlcoholicDrinkComponent } from './components/random-alcoholic-drink/random-alcoholic-drink.component';
import { RandomNonAlcoholicDrinkComponent } from './components/random-non-alcoholic-drink/random-non-alcoholic-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    FooterComponent,
    AlcoholicComponent,
    NonAlcoholicComponent,
    DrinkCardComponent,
    DrinkDetailsComponent,
    ReplaceSpacesPipe,
    RandomDrinkComponent,
    PaginatorComponent,
    RandomAlcoholicDrinkComponent,
    RandomNonAlcoholicDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

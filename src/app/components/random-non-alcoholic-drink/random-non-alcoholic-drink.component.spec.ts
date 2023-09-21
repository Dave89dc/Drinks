import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNonAlcoholicDrinkComponent } from './random-non-alcoholic-drink.component';

describe('RandomNonAlcoholicDrinkComponent', () => {
  let component: RandomNonAlcoholicDrinkComponent;
  let fixture: ComponentFixture<RandomNonAlcoholicDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomNonAlcoholicDrinkComponent]
    });
    fixture = TestBed.createComponent(RandomNonAlcoholicDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

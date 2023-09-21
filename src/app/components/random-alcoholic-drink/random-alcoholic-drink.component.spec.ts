import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAlcoholicDrinkComponent } from './random-alcoholic-drink.component';

describe('RandomAlcoholicDrinkComponent', () => {
  let component: RandomAlcoholicDrinkComponent;
  let fixture: ComponentFixture<RandomAlcoholicDrinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomAlcoholicDrinkComponent]
    });
    fixture = TestBed.createComponent(RandomAlcoholicDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

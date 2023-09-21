import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicComponent } from './non-alcoholic.component';

describe('NonAlcoholicComponent', () => {
  let component: NonAlcoholicComponent;
  let fixture: ComponentFixture<NonAlcoholicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonAlcoholicComponent]
    });
    fixture = TestBed.createComponent(NonAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

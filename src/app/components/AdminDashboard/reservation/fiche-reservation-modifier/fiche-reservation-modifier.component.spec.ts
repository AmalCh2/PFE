import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheReservationModifierComponent } from './fiche-reservation-modifier.component';

describe('FicheReservationModifierComponent', () => {
  let component: FicheReservationModifierComponent;
  let fixture: ComponentFixture<FicheReservationModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheReservationModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FicheReservationModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

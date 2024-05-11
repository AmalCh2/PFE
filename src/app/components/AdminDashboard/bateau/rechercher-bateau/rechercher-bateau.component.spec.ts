import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherBateauComponent } from './rechercher-bateau.component';

describe('RechercherBateauComponent', () => {
  let component: RechercherBateauComponent;
  let fixture: ComponentFixture<RechercherBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercherBateauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercherBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

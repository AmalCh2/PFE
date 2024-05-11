import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherClientComponent } from './rechercher-client.component';

describe('RechercherClientComponent', () => {
  let component: RechercherClientComponent;
  let fixture: ComponentFixture<RechercherClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercherClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercherClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

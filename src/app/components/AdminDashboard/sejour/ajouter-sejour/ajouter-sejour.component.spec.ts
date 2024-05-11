import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSejourComponent } from './ajouter-sejour.component';

describe('AjouterSejourComponent', () => {
  let component: AjouterSejourComponent;
  let fixture: ComponentFixture<AjouterSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterSejourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

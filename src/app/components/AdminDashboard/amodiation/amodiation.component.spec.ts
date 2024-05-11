import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmodiationComponent } from './amodiation.component';

describe('AmodiationComponent', () => {
  let component: AmodiationComponent;
  let fixture: ComponentFixture<AmodiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmodiationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmodiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

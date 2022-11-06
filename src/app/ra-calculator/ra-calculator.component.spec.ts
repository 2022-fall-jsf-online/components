import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaCalculatorComponent } from './ra-calculator.component';

describe('RaCalculatorComponent', () => {
  let component: RaCalculatorComponent;
  let fixture: ComponentFixture<RaCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

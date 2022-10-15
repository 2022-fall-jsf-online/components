import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramseyCalculatorComponent } from './aramsey-calculator.component';

describe('AramseyCalculatorComponent', () => {
  let component: AramseyCalculatorComponent;
  let fixture: ComponentFixture<AramseyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AramseyCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AramseyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmfTipCalculatorComponent } from './smf-tip-calculator.component';

describe('SmfTipCalculatorComponent', () => {
  let component: SmfTipCalculatorComponent;
  let fixture: ComponentFixture<SmfTipCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmfTipCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmfTipCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

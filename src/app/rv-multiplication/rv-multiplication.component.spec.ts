import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvMultiplicationComponent } from './rv-multiplication.component';

describe('RvMultiplicationComponent', () => {
  let component: RvMultiplicationComponent;
  let fixture: ComponentFixture<RvMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvMultiplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

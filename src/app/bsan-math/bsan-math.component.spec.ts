import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsanMathComponent } from './bsan-math.component';

describe('BsanMathComponent', () => {
  let component: BsanMathComponent;
  let fixture: ComponentFixture<BsanMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsanMathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsanMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

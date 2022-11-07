import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RleeAddingComponent } from './rlee-adding.component';

describe('RleeAddingComponent', () => {
  let component: RleeAddingComponent;
  let fixture: ComponentFixture<RleeAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RleeAddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RleeAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

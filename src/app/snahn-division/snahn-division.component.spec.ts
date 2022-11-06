import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnahnDivisionComponent } from './snahn-division.component';

describe('SnahnDivisionComponent', () => {
  let component: SnahnDivisionComponent;
  let fixture: ComponentFixture<SnahnDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnahnDivisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnahnDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

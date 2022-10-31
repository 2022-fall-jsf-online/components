import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidComponentComponent } from './david-component.component';

describe('DavidComponentComponent', () => {
  let component: DavidComponentComponent;
  let fixture: ComponentFixture<DavidComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavidComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

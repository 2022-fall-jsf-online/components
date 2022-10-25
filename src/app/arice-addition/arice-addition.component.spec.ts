import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriceAdditionComponent } from './arice-addition.component';

describe('AriceAdditionComponent', () => {
  let component: AriceAdditionComponent;
  let fixture: ComponentFixture<AriceAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriceAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

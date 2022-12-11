import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmeyMultiplyComponent } from './dmey-multiply.component';

describe('DmeyMultiplyComponent', () => {
  let component: DmeyMultiplyComponent;
  let fixture: ComponentFixture<DmeyMultiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmeyMultiplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmeyMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

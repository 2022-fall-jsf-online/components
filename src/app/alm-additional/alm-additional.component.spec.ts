import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmAdditionalComponent } from './alm-additional.component';

describe('AlmAdditionComponent', () => {
  let component: AlmAdditionalComponent;
  let fixture: ComponentFixture<AlmAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmAdditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

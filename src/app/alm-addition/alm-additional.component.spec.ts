import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmAdditionComponent } from './alm-addition.component';

describe('AlmAdditionComponent', () => {
  let component: AlmAdditionComponent;
  let fixture: ComponentFixture<AlmAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

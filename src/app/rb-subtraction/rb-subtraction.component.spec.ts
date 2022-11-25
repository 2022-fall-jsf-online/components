import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbSubtractionComponent } from './rb-subtraction.component';

describe('RbSubtractionComponent', () => {
  let component: RbSubtractionComponent;
  let fixture: ComponentFixture<RbSubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbSubtractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

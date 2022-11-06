import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhCouponComponent } from './dh-coupon.component';

describe('DhCouponComponent', () => {
  let component: DhCouponComponent;
  let fixture: ComponentFixture<DhCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

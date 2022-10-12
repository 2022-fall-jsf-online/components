import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsanAdditionComponent } from './bsan-addition.component';

describe('BsanAdditionComponent', () => {
  let component: BsanAdditionComponent;
  let fixture: ComponentFixture<BsanAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsanAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsanAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

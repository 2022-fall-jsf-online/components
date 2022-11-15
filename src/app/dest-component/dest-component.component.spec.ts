import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestComponentComponent } from './dest-component.component';

describe('DestComponentComponent', () => {
  let component: DestComponentComponent;
  let fixture: ComponentFixture<DestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

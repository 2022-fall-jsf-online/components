import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlperenAdditionComponent } from './alperen-addition.component';

describe('AlperenAdditionComponent', () => {
  let component: AlperenAdditionComponent;
  let fixture: ComponentFixture<AlperenAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlperenAdditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlperenAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

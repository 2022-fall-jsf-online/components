import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatelOperationComponent } from './spatel-operation.component';

describe('SpatelOperationComponent', () => {
  let component: SpatelOperationComponent;
  let fixture: ComponentFixture<SpatelOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpatelOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpatelOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

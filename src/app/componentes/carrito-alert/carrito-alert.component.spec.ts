import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoAlertComponent } from './carrito-alert.component';

describe('CarritoAlertComponent', () => {
  let component: CarritoAlertComponent;
  let fixture: ComponentFixture<CarritoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

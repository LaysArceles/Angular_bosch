import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHome } from './cart-home';

describe('CartHome', () => {
  let component: CartHome;
  let fixture: ComponentFixture<CartHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartHome],
    }).compileComponents();

    fixture = TestBed.createComponent(CartHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

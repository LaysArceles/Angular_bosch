import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonC } from './button-c';

describe('ButtonC', () => {
  let component: ButtonC;
  let fixture: ComponentFixture<ButtonC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonC],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

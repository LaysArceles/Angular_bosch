import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputC } from './input-c';

describe('InputC', () => {
  let component: InputC;
  let fixture: ComponentFixture<InputC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputC],
    }).compileComponents();

    fixture = TestBed.createComponent(InputC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

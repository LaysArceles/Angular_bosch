import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactC } from './contact-c';

describe('ContactC', () => {
  let component: ContactC;
  let fixture: ComponentFixture<ContactC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactC],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

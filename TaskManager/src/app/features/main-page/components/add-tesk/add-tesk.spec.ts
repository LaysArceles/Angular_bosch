import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTesk } from './add-tesk';

describe('AddTesk', () => {
  let component: AddTesk;
  let fixture: ComponentFixture<AddTesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTesk],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTesk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

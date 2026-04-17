import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTesk } from './get-tesk';

describe('GetTesk', () => {
  let component: GetTesk;
  let fixture: ComponentFixture<GetTesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTesk],
    }).compileComponents();

    fixture = TestBed.createComponent(GetTesk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

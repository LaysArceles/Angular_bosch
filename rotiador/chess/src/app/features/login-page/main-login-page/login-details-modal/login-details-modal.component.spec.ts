import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDetailsModalComponent } from './login-details-modal.component';

describe('LoginDetailsModalComponent', () => {
  let component: LoginDetailsModalComponent;
  let fixture: ComponentFixture<LoginDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDetailsModalComponent]
    });
    fixture = TestBed.createComponent(LoginDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

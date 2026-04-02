import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPageComponent } from './cadastrar-page.component';

describe('CadastrarPageComponent', () => {
  let component: CadastrarPageComponent;
  let fixture: ComponentFixture<CadastrarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPageComponent]
    });
    fixture = TestBed.createComponent(CadastrarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

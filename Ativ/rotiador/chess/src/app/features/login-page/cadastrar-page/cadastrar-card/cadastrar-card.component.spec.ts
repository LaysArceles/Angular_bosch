import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCardComponent } from './cadastrar-card.component';

describe('CadastrarCardComponent', () => {
  let component: CadastrarCardComponent;
  let fixture: ComponentFixture<CadastrarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarCardComponent]
    });
    fixture = TestBed.createComponent(CadastrarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadodetailsmodalComponent } from './mercadodetailsmodal.component';

describe('MercadodetailsmodalComponent', () => {
  let component: MercadodetailsmodalComponent;
  let fixture: ComponentFixture<MercadodetailsmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadodetailsmodalComponent]
    });
    fixture = TestBed.createComponent(MercadodetailsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

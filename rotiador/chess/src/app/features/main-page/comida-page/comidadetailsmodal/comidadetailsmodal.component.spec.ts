import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidadetailsmodalComponent } from './comidadetailsmodal.component';

describe('ComidadetailsmodalComponent', () => {
  let component: ComidadetailsmodalComponent;
  let fixture: ComponentFixture<ComidadetailsmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidadetailsmodalComponent]
    });
    fixture = TestBed.createComponent(ComidadetailsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

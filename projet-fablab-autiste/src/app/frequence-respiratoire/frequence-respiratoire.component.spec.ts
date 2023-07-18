import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenceRespiratoireComponent } from './frequence-respiratoire.component';

describe('FrequenceRespiratoireComponent', () => {
  let component: FrequenceRespiratoireComponent;
  let fixture: ComponentFixture<FrequenceRespiratoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequenceRespiratoireComponent]
    });
    fixture = TestBed.createComponent(FrequenceRespiratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

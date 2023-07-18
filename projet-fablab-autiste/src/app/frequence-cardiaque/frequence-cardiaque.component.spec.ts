import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenceCardiaqueComponent } from './frequence-cardiaque.component';

describe('FrequenceCardiaqueComponent', () => {
  let component: FrequenceCardiaqueComponent;
  let fixture: ComponentFixture<FrequenceCardiaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequenceCardiaqueComponent]
    });
    fixture = TestBed.createComponent(FrequenceCardiaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

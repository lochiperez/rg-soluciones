import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLetsTalkComponent } from './form-lets-talk.component';

describe('FormComponent', () => {
  let component: FormLetsTalkComponent;
  let fixture: ComponentFixture<FormLetsTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLetsTalkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLetsTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCardFormComponent } from './login-card-form.component';

describe('LoginCardFormComponent', () => {
  let component: LoginCardFormComponent;
  let fixture: ComponentFixture<LoginCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

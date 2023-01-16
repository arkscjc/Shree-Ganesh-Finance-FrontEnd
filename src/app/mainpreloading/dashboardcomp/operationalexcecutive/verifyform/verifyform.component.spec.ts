import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyformComponent } from './verifyform.component';

describe('VerifyformComponent', () => {
  let component: VerifyformComponent;
  let fixture: ComponentFixture<VerifyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

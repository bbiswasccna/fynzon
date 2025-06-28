import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySecComponent } from './pay-sec.component';

describe('PaySecComponent', () => {
  let component: PaySecComponent;
  let fixture: ComponentFixture<PaySecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

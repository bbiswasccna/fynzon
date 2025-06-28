import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSecComponent } from './mobile-sec.component';

describe('MobileSecComponent', () => {
  let component: MobileSecComponent;
  let fixture: ComponentFixture<MobileSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

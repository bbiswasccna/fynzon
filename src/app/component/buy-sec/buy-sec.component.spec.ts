import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySecComponent } from './buy-sec.component';

describe('BuySecComponent', () => {
  let component: BuySecComponent;
  let fixture: ComponentFixture<BuySecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

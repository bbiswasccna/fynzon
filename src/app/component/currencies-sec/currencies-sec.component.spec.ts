import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesSecComponent } from './currencies-sec.component';

describe('CurrenciesSecComponent', () => {
  let component: CurrenciesSecComponent;
  let fixture: ComponentFixture<CurrenciesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

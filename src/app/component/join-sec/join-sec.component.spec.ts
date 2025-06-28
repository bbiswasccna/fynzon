import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSecComponent } from './join-sec.component';

describe('JoinSecComponent', () => {
  let component: JoinSecComponent;
  let fixture: ComponentFixture<JoinSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

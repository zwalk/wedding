import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingbearerComponent } from './ringbearer.component';

describe('RingbearerComponent', () => {
  let component: RingbearerComponent;
  let fixture: ComponentFixture<RingbearerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingbearerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingbearerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

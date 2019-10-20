import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyViewerComponent } from './party-viewer.component';

describe('PartyViewerComponent', () => {
  let component: PartyViewerComponent;
  let fixture: ComponentFixture<PartyViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

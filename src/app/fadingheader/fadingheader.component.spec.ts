import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadingheaderComponent } from './fadingheader.component';

describe('FadingheaderComponent', () => {
  let component: FadingheaderComponent;
  let fixture: ComponentFixture<FadingheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadingheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

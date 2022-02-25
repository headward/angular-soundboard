import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundbuttonsComponent } from './soundbuttons.component';

describe('SoundbuttonsComponent', () => {
  let component: SoundbuttonsComponent;
  let fixture: ComponentFixture<SoundbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

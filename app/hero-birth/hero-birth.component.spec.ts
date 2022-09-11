import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthComponent } from './hero-birth.component';

describe('HeroBirthComponent', () => {
  let component: HeroBirthComponent;
  let fixture: ComponentFixture<HeroBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBirthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

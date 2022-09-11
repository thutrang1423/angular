import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicStyleComponent } from './music-style.component';

describe('MusicStyleComponent', () => {
  let component: MusicStyleComponent;
  let fixture: ComponentFixture<MusicStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

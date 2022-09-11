import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSingerComponent } from './music-singer.component';

describe('MusicSingerComponent', () => {
  let component: MusicSingerComponent;
  let fixture: ComponentFixture<MusicSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicSingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

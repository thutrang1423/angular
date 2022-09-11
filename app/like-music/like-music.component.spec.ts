import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeMusicComponent } from './like-music.component';

describe('LikeMusicComponent', () => {
  let component: LikeMusicComponent;
  let fixture: ComponentFixture<LikeMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

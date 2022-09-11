import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingSingerComponent } from './topping-singer.component';

describe('ToppingSingerComponent', () => {
  let component: ToppingSingerComponent;
  let fixture: ComponentFixture<ToppingSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingSingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

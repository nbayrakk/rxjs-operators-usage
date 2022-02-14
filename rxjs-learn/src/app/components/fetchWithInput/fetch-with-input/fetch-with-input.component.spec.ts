import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchWithInputComponent } from './fetch-with-input.component';

describe('FetchWithInputComponent', () => {
  let component: FetchWithInputComponent;
  let fixture: ComponentFixture<FetchWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchWithInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

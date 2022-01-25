import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FectchDataFromApiComponent } from './fectch-data-from-api.component';

describe('FectchDataFromApiComponent', () => {
  let component: FectchDataFromApiComponent;
  let fixture: ComponentFixture<FectchDataFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FectchDataFromApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FectchDataFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

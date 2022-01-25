import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3ChildComponent } from './ass3-child.component';

describe('Ass3ChildComponent', () => {
  let component: Ass3ChildComponent;
  let fixture: ComponentFixture<Ass3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass3ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass3ParentComponent } from './ass3-parent.component';

describe('Ass3ParentComponent', () => {
  let component: Ass3ParentComponent;
  let fixture: ComponentFixture<Ass3ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass3ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass3ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

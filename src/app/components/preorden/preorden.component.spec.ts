import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreordenComponent } from './preorden.component';

describe('PreordenComponent', () => {
  let component: PreordenComponent;
  let fixture: ComponentFixture<PreordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreordenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

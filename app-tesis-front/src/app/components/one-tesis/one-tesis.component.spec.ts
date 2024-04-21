import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTesisComponent } from './one-tesis.component';

describe('OneTesisComponent', () => {
  let component: OneTesisComponent;
  let fixture: ComponentFixture<OneTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneTesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

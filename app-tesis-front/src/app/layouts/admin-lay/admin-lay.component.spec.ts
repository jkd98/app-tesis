import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayComponent } from './admin-lay.component';

describe('AdminLayComponent', () => {
  let component: AdminLayComponent;
  let fixture: ComponentFixture<AdminLayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

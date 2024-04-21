import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOndeTesisComponent } from './edit-onde-tesis.component';

describe('EditOndeTesisComponent', () => {
  let component: EditOndeTesisComponent;
  let fixture: ComponentFixture<EditOndeTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOndeTesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditOndeTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

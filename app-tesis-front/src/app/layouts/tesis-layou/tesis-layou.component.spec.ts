import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesisLayouComponent } from './tesis-layou.component';

describe('TesisLayouComponent', () => {
  let component: TesisLayouComponent;
  let fixture: ComponentFixture<TesisLayouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesisLayouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesisLayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

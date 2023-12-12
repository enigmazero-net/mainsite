import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchVizComponent } from './arch-viz.component';

describe('ArchVizComponent', () => {
  let component: ArchVizComponent;
  let fixture: ComponentFixture<ArchVizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchVizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

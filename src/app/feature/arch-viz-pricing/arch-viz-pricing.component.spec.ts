import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchVizPricingComponent } from './arch-viz-pricing.component';

describe('ArchVizPricingComponent', () => {
  let component: ArchVizPricingComponent;
  let fixture: ComponentFixture<ArchVizPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchVizPricingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchVizPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

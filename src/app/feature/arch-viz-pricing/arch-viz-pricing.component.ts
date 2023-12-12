import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage, ViewportScroller} from '@angular/common';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-arch-viz-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent, NgOptimizedImage, FooterComponent],
  templateUrl: './arch-viz-pricing.component.html',
  styleUrl: './arch-viz-pricing.component.scss'
})
export class ArchVizPricingComponent {
  constructor(private scroll: ViewportScroller) {
    // console.log(scroll.getScrollPosition())
    this.scroll.scrollToPosition([0, 0]);
  }
}

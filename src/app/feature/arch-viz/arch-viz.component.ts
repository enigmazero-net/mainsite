import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../footer/footer.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-arch-viz',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavBarComponent],
  templateUrl: './arch-viz.component.html',
  styleUrl: './arch-viz.component.scss'
})
export class ArchVizComponent {

}

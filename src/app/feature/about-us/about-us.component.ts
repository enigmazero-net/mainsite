import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent, NgOptimizedImage, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}

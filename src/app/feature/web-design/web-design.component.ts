import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [CommonModule, CdkMenuTrigger, CdkMenu, CdkMenuItem, NavBarComponent, FooterComponent],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {

}

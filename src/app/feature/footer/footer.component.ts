import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkMenu, CdkMenuItem} from "@angular/cdk/menu";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [CommonModule, CdkMenu, CdkMenuItem, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

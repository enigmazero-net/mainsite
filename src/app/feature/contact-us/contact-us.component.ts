import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {FooterComponent} from "../footer/footer.component";
declare const hbspt: any

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    hbspt.forms.create({
      portalId: "43868494",
      formId: "97bcb030-fd88-4bc5-a95b-febefe14552c",
      target: "#hubspotForm",
      region: "na1",
    });
  }
}

// <script>
//   hbspt.forms.create({
//     region: "na1",
//     portalId: "43868494",
//     formId: "97bcb030-fd88-4bc5-a95b-febefe14552c"
//   });
// </script>

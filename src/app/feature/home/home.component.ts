import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage, ViewportScroller} from '@angular/common';
import {Router, RouterModule} from "@angular/router";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {FooterComponent} from "../footer/footer.component";
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, CdkAccordionModule, NavBarComponent,
    FooterComponent, CdkMenu, CdkMenuItem, CdkMenuTrigger],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  year = new Date().getFullYear();
  title = 'Enigma zero';
  webDev = 1;
  marketing = 1;
  branding = 3;
  architectural = 1;

  items = [
    {
      question: '1. What types of architecture visualization services do you offer?',
      answer: 'We specialize in a range of architectural visualization services including 3D modeling, photo-realistic rendering, virtual tours, and interactive 3D floor plans. Our services cater to both residential and commercial projects, providing a detailed and immersive visualization experience.'
    },
    {
      question: '2. How does your website building process work for clients in the architectural industry?',
      answer: 'Our website building process is tailored to the unique needs of the architectural industry. It begins with a consultation to understand your firm\'s portfolio and specific requirements. We then design and develop a custom website that showcases your projects, incorporates interactive elements like virtual tours, and optimizes for both user experience and search engine visibility.'
    },
    {
      question: '3. What is the typical turnaround time for an architectural visualization project?',
      answer: 'The turnaround time for an architectural visualization project varies based on the complexity and scale of the project. On average, smaller projects can take anywhere from a few days to a week, while larger or more complex visualizations might take several weeks. We always work closely with our clients to set realistic timelines and ensure timely delivery.'
    },
    {
      question: '4. How do you ensure the quality and accuracy of your architectural visualizations?',
      answer: 'Quality and accuracy are paramount in our architectural visualizations. Our team comprises experienced professionals who pay meticulous attention to detail. We also maintain a rigorous review and feedback process with our clients to ensure that the final output meets their exact specifications and standards.'
    },
    {
      question: '5. Do you offer construction services for projects based on the architectural visualizations?',
      answer: 'Yes, we provide construction services for clients based on the architectural visualizations we create. However, it\'s important to note that our construction services are exclusively available to clients residing in Sri Lanka. We do not offer these services internationally. Our team ensures that the construction process aligns closely with the envisioned designs, maintaining the integrity and quality of the original architectural concept.'
    }
  ];
  expandedIndex = 0;

  constructor(private scroller: ViewportScroller, private router: Router) {
  };

  ngAfterContentInit() {
    // hbspt.forms.create({
    //   portalId: "43868494",
    //   formId: "7f935be4-6bae-4a23-b7c0-91665c8c47d0",
    //   target: "#hubspotForm",
    //   region: "na1",
    // });
  }

  gotoWebSiteDevelopment() {
    this.router.navigate([], {fragment: "WebSiteDevelopment"});
  }

  gotoArchitecturalVisualization() {
    this.router.navigate([], {fragment: "ArchitecturalVisualization"});
  }

  gotoMarketing() {
    this.router.navigate([], {fragment: "Marketing"});

  }

  gotoBranding() {
    this.router.navigate([], {fragment: "Branding"});
  }

  gotoLetUsHelp() {
    this.router.navigate([], {fragment: "LetUsHelp"});
  }

  openAboutUsDialog() {
    // const dialogRef = this.dialog.open(AboutUsDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

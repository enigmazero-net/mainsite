import {Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";
import {AboutUsComponent} from "./feature/about-us/about-us.component";
import {ContactUsComponent} from "./feature/contact-us/contact-us.component";
import {WebDesignComponent} from "./feature/web-design/web-design.component";
import {ArchVizComponent} from "./feature/arch-viz/arch-viz.component";
import {MarketingComponent} from "./feature/marketing/marketing.component";
import {ArchVizPricingComponent} from "./feature/arch-viz-pricing/arch-viz-pricing.component";

export const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'web-design', component: WebDesignComponent},
  {path: 'arch-viz', component: ArchVizComponent},
  {path: 'arch-viz-pricing', component: ArchVizPricingComponent},
  {path: 'marketing', component: MarketingComponent}
];

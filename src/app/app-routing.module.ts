import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AmazonfebComponent } from './amazonfeb/amazonfeb.component';
import { CostumeagentComponent } from './costumeagent/costumeagent.component';
import { EtsyComponent } from './etsy/etsy.component';
import { EtsyfebComponent } from './etsyfeb/etsyfeb.component';
import { FebtotalComponent } from './febtotal/febtotal.component';
import { HomeComponent } from './home/home.component';
import { ManualComponent } from './manual/manual.component';
import { MaskmarketComponent } from './maskmarket/maskmarket.component';
import { MaskmarketfebComponent } from './maskmarketfeb/maskmarketfeb.component';
import { TvsoComponent } from './tvso/tvso.component';
import { UcsComponent } from './ucs/ucs.component';
import { UcsfebComponent } from './ucsfeb/ucsfeb.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'amazon', component: AmazonComponent },
  { path: 'etsy', component: EtsyComponent },
  { path: 'tvso', component: TvsoComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'ucs', component: UcsComponent },
  { path: 'maskmarket', component: MaskmarketComponent },
  { path: 'febtotal', component: FebtotalComponent },
  { path: 'etsyfeb', component: EtsyfebComponent },
  { path: 'amazonfeb', component: AmazonfebComponent },
  { path: 'maskfeb', component: MaskmarketfebComponent },
  { path: 'ucsfeb', component: UcsfebComponent },
  { path: 'costumeagent', component: CostumeagentComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

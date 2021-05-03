import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AmazonfebComponent } from './amazonfeb/amazonfeb.component';
import { AmazonmarchComponent } from './amazonmarch/amazonmarch.component';
import { ApriltotalComponent } from './apriltotal/apriltotal.component';
import { CostumeagentComponent } from './costumeagent/costumeagent.component';
import { CostumeagentmarchComponent } from './costumeagentmarch/costumeagentmarch.component';
import { EtsyComponent } from './etsy/etsy.component';
import { EtsyfebComponent } from './etsyfeb/etsyfeb.component';
import { EtsymarchComponent } from './etsymarch/etsymarch.component';
import { FebtotalComponent } from './febtotal/febtotal.component';
import { HomeComponent } from './home/home.component';
import { ManualComponent } from './manual/manual.component';
import { ManualfebComponent } from './manualfeb/manualfeb.component';
import { ManualordersmarchComponent } from './manualordersmarch/manualordersmarch.component';
import { MarchtotalComponent } from './marchtotal/marchtotal.component';
import { MaskmarketComponent } from './maskmarket/maskmarket.component';
import { MaskmarketfebComponent } from './maskmarketfeb/maskmarketfeb.component';
import { MaskmarketmarchComponent } from './maskmarketmarch/maskmarketmarch.component';
import { TvsoComponent } from './tvso/tvso.component';
import { TvsomarchComponent } from './tvsomarch/tvsomarch.component';
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
  { path: 'manualfeb', component: ManualfebComponent },
  { path: 'costumeagent', component: CostumeagentComponent },
  { path: 'amazonmarch', component: AmazonmarchComponent },
  { path: 'etsymarch', component: EtsymarchComponent },
  { path: 'tvsomarch', component: TvsomarchComponent },
  { path: 'marchtotal', component: MarchtotalComponent },
  { path: 'costumeagentmarch', component:  CostumeagentmarchComponent},
  { path: 'maskmarketmarch', component:  MaskmarketmarchComponent},
  { path: 'manualordersmarch', component:  ManualordersmarchComponent},
  { path: 'apriltotal', component:  ApriltotalComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

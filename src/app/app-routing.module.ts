import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import { AmazonfebComponent } from './amazonfeb/amazonfeb.component';
import { AmazonmarchComponent } from './amazonmarch/amazonmarch.component';
import { AprilamazonComponent } from './aprilamazon/aprilamazon.component';
import { AprilcostumeagentComponent } from './aprilcostumeagent/aprilcostumeagent.component';
import { ApriletsyComponent } from './apriletsy/apriletsy.component';
import { AprilmaskmarketComponent } from './aprilmaskmarket/aprilmaskmarket.component';
import { ApriltotalComponent } from './apriltotal/apriltotal.component';
import { ApriltvsoComponent } from './apriltvso/apriltvso.component';
import { CostumeagentComponent } from './costumeagent/costumeagent.component';
import { CostumeagentmarchComponent } from './costumeagentmarch/costumeagentmarch.component';
import { EtsyComponent } from './etsy/etsy.component';
import { EtsyfebComponent } from './etsyfeb/etsyfeb.component';
import { EtsymarchComponent } from './etsymarch/etsymarch.component';
import { FebtotalComponent } from './febtotal/febtotal.component';
import { HomeComponent } from './home/home.component';
import { ManualComponent } from './manual/manual.component';
import { ManualfebComponent } from './manualfeb/manualfeb.component';
import { ManualorderaprilComponent } from './manualorderapril/manualorderapril.component';
import { ManualordersmarchComponent } from './manualordersmarch/manualordersmarch.component';
import { MarchtotalComponent } from './marchtotal/marchtotal.component';
import { MaskmarketComponent } from './maskmarket/maskmarket.component';
import { MaskmarketfebComponent } from './maskmarketfeb/maskmarketfeb.component';
import { MaskmarketmarchComponent } from './maskmarketmarch/maskmarketmarch.component';
import { MayamazonComponent } from './mayamazon/mayamazon.component';
import { MayetsyComponent } from './mayetsy/mayetsy.component';
import { MaytotalComponent } from './maytotal/maytotal.component';
import { TvsoComponent } from './tvso/tvso.component';
import { TvsomarchComponent } from './tvsomarch/tvsomarch.component';
import { UcsComponent } from './ucs/ucs.component';
import { UcsfebComponent } from './ucsfeb/ucsfeb.component';
import { WirelessvisionComponent } from './wirelessvision/wirelessvision.component';

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
  { path: 'amazonapril', component:  AprilamazonComponent},
  { path: 'etsyapril', component:  ApriletsyComponent},
  { path: 'tvsoapril', component:  ApriltvsoComponent},
  { path: 'costumeapril', component:  AprilcostumeagentComponent},
  { path: 'maskapril', component:  AprilmaskmarketComponent},
  { path: 'manualorderapril', component:  ManualorderaprilComponent},
  { path: 'mayamazon', component:  MayamazonComponent},
  { path: 'maytotal', component:  MaytotalComponent},
  { path: 'mayetsy', component:  MayetsyComponent},
  { path: 'wireless', component:  WirelessvisionComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

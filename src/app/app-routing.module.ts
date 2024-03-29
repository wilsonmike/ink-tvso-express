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
import { CapesmayComponent } from './capesmay/capesmay.component';
import { CostumeagentComponent } from './costumeagent/costumeagent.component';
import { CostumeagentmarchComponent } from './costumeagentmarch/costumeagentmarch.component';
import { EtsyComponent } from './etsy/etsy.component';
import { EtsyfebComponent } from './etsyfeb/etsyfeb.component';
import { EtsymarchComponent } from './etsymarch/etsymarch.component';
import { FebtotalComponent } from './febtotal/febtotal.component';
import { HomeComponent } from './home/home.component';
import { JulydoneComponent } from './julydone/julydone.component';
import { JuneamazonComponent } from './juneamazon/juneamazon.component';
import { JunecapesComponent } from './junecapes/junecapes.component';
import { JunecostumeagentComponent } from './junecostumeagent/junecostumeagent.component';
import { JuneetsyComponent } from './juneetsy/juneetsy.component';
import { JunemanualComponent } from './junemanual/junemanual.component';
import { JunemaskmarketComponent } from './junemaskmarket/junemaskmarket.component';
import { JunetotalComponent } from './junetotal/junetotal.component';
import { JunetvsoComponent } from './junetvso/junetvso.component';
import { ManualComponent } from './manual/manual.component';
import { ManualfebComponent } from './manualfeb/manualfeb.component';
import { ManualmayComponent } from './manualmay/manualmay.component';
import { ManualorderaprilComponent } from './manualorderapril/manualorderapril.component';
import { ManualordersmarchComponent } from './manualordersmarch/manualordersmarch.component';
import { MarchtotalComponent } from './marchtotal/marchtotal.component';
import { MaskmarketComponent } from './maskmarket/maskmarket.component';
import { MaskmarketfebComponent } from './maskmarketfeb/maskmarketfeb.component';
import { MaskmarketmarchComponent } from './maskmarketmarch/maskmarketmarch.component';
import { MayamazonComponent } from './mayamazon/mayamazon.component';
import { MayetsyComponent } from './mayetsy/mayetsy.component';
import { MaymaskComponent } from './maymask/maymask.component';
import { MaytotalComponent } from './maytotal/maytotal.component';
import { MaytvsoComponent } from './maytvso/maytvso.component';
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
  { path: 'costumeagentmarch', component: CostumeagentmarchComponent },
  { path: 'maskmarketmarch', component: MaskmarketmarchComponent },
  { path: 'manualordersmarch', component: ManualordersmarchComponent },
  { path: 'apriltotal', component: ApriltotalComponent },
  { path: 'amazonapril', component: AprilamazonComponent },
  { path: 'etsyapril', component: ApriletsyComponent },
  { path: 'tvsoapril', component: ApriltvsoComponent },
  { path: 'costumeapril', component: AprilcostumeagentComponent },
  { path: 'maskapril', component: AprilmaskmarketComponent },
  { path: 'manualorderapril', component: ManualorderaprilComponent },
  { path: 'mayamazon', component: MayamazonComponent },
  { path: 'maytotal', component: MaytotalComponent },
  { path: 'mayetsy', component: MayetsyComponent },
  { path: 'maytvso', component: MaytvsoComponent },
  { path: 'capesmay', component: CapesmayComponent },
  { path: 'wireless', component: WirelessvisionComponent },
  { path: 'maymask', component: MaymaskComponent },
  { path: 'manmay', component: ManualmayComponent },
  { path: 'junetotal', component: JunetotalComponent },
  { path: 'juneamazon', component: JuneamazonComponent },
  { path: 'junecapes', component: JunecapesComponent },
  { path: 'junetvso', component: JunetvsoComponent },
  { path: 'junemaskmarket', component: JunemaskmarketComponent },
  { path: 'junecostumeagent', component: JunecostumeagentComponent },
  { path: 'juneetsy', component: JuneetsyComponent },
  { path: 'junemanual', component: JunemanualComponent },
  { path: 'july', component: JulydoneComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AmazonComponent } from './amazon/amazon.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { EtsyComponent } from './etsy/etsy.component';
import { TvsoComponent } from './tvso/tvso.component';
import { ManualComponent } from './manual/manual.component';
import { UcsComponent } from './ucs/ucs.component';
import { MaskmarketComponent } from './maskmarket/maskmarket.component';
import { FooterComponent } from './footer/footer.component';
import { FebtotalComponent } from './febtotal/febtotal.component';
import { AmazonfebComponent } from './amazonfeb/amazonfeb.component';
import { EtsyfebComponent } from './etsyfeb/etsyfeb.component';
import { UcsfebComponent } from './ucsfeb/ucsfeb.component';
import { MaskmarketfebComponent } from './maskmarketfeb/maskmarketfeb.component';
import { CostumeagentComponent } from './costumeagent/costumeagent.component';
import { ManualfebComponent } from './manualfeb/manualfeb.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
    NavbarComponent,
    HomeComponent,
    EtsyComponent,
    TvsoComponent,
    ManualComponent,
    UcsComponent,
    MaskmarketComponent,
    FooterComponent,
    FebtotalComponent,
    AmazonfebComponent,
    EtsyfebComponent,
    UcsfebComponent,
    MaskmarketfebComponent,
    CostumeagentComponent,
    ManualfebComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

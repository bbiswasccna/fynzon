import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { MobileSecComponent } from './component/mobile-sec/mobile-sec.component';
import { JoinSecComponent } from './component/join-sec/join-sec.component';
import { BuySecComponent } from './component/buy-sec/buy-sec.component';
import { OurVisionComponent } from './component/our-vision/our-vision.component';
import { PaySecComponent } from './component/pay-sec/pay-sec.component';
import { TeamSecComponent } from './component/team-sec/team-sec.component';
import { LandingComponent } from './component/landing/landing.component';
import { FooterComponent } from './component/footer/footer.component';
import { CurrenciesSecComponent } from './component/currencies-sec/currencies-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MobileSecComponent,
    JoinSecComponent,
    BuySecComponent,
    OurVisionComponent,
    PaySecComponent,
    TeamSecComponent,
    LandingComponent,
    FooterComponent,
    CurrenciesSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

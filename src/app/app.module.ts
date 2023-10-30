import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { PapaParseModule } from 'ngx-papaparse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { SummaryComponent } from './summary/summary.component';
import { TabsComponent } from './tabs/tabs.component';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';
import { OverviewComponent } from './overview/overview.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { SafePipe } from './shared/pipes/safe/safe.pipe';
import { appSetIframeStyle } from './shared/directives/set-iframe-style.directive';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopButtonComponent } from './top-button/top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StoriesComponent,
    SummaryComponent,
    TabsComponent,
    DecisionTreeComponent,
    OverviewComponent,
    WrapperComponent,
    HeroBannerComponent,
    SafePipe,
    appSetIframeStyle,
    AboutUsComponent,
    TopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

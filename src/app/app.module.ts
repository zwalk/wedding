import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BridesmaidsComponent } from './bridesmaids/bridesmaids.component';
import { NavScrollDirective } from './nav-scroll.directive';
import { NavFixDirective } from './nav-fix.directive';
import { PartyViewerComponent } from './party-viewer/party-viewer.component';
import { FadingheaderComponent } from './fadingheader/fadingheader.component';
import { AboutComponent } from './about/about.component';
import { DogsComponent } from './dogs/dogs.component';
import { RingbearerComponent } from './ringbearer/ringbearer.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BridesmaidsComponent,
    NavScrollDirective,
    NavFixDirective,
    PartyViewerComponent,
    FadingheaderComponent,
    AboutComponent,
    DogsComponent,
    RingbearerComponent,
    InstagramFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

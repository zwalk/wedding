import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BridesmaidsComponent } from './bridesmaids/bridesmaids.component';
import { NavScrollDirective } from './nav-scroll.directive';
import { NavFixDirective } from './nav-fix.directive';
import { PartyViewerComponent } from './party-viewer/party-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BridesmaidsComponent,
    NavScrollDirective,
    NavFixDirective,
    PartyViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BusinessCardComponent } from './business-card/business-card.component';
import { FlyerBrochureComponent } from './flyer-brochure/flyer-brochure.component';
import { TableComponent } from './table/table.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { CategoryTabComponent } from './category-tab/category-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    BusinessCardComponent,
    FlyerBrochureComponent,
    EnvelopeComponent,
    CategoryTabComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

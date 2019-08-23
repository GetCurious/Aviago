import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {NgModule} from '@angular/core';
import {FooterComponent} from './layout/footer/footer.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {MapComponent} from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { AispotService } from "./shared/aispot.service";
import { AppRoutingModule } from "./app-routing.module";
import { MapComponent } from './components/map/map.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_LQyuIMlp4x_rP__-TbPAkPF7HVA4xTY'
    }),
    AppRoutingModule
  ],
  providers: [AispotService],
  bootstrap: [AppComponent]
})
export class AppModule { }

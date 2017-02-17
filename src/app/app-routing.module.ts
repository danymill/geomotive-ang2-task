import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { MapComponent } from "./components/map/map.component";
import { DetailedViewComponent } from "./components/detailed-view/detailed-view.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'map/:id',
    component: DetailedViewComponent
  },
  {
    path: '**',
    redirectTo: 'map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

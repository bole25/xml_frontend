import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'createCertificate', component: CreateCertificateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

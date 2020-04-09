import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {CreateCertificateService} from './certificatesAdministration/createCertificate/createCertificate.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CreateCertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

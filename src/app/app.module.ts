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
import { ShowCertificatesComponent} from './showCertificates/showCertificates.component';
import { ShowCertificatesService } from './showCertificates/showSertifikates.service';

const appRoutes: Routes = [
  { path: 'createCertificate', component: CreateCertificateComponent },
  { path: 'showCertificates', component: ShowCertificatesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCertificateComponent,
    ShowCertificatesComponent,
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
  providers: [CreateCertificateService, ShowCertificatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

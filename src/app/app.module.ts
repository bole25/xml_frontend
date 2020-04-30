import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {CreateCertificateService} from './certificatesAdministration/createCertificate/createCertificate.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowCertificatesComponent} from './showCertificates/showCertificates.component';
import { ShowCertificatesService } from './showCertificates/showSertifikates.service';
import { ShowCertificateService } from './showCertificates/showCertificate/showCertificate.service';
import { ShowCertificateComponent} from './showCertificates/showCertificate/showCertificate.component';
import {LoginService} from './services/login.service';

const appRoutes: Routes = [
  { path: 'createCertificate', component: CreateCertificateComponent },
  { path: 'showCertificates', component: ShowCertificatesComponent },
  { path: 'showCertificates/each', component: ShowCertificateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateCertificateComponent,
    ShowCertificatesComponent,
    ShowCertificateComponent
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
    ReactiveFormsModule,
  ],
  providers: [CreateCertificateService, ShowCertificatesService, ShowCertificateService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

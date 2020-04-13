import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';
import {ShowCertificatesComponent} from './showCertificates/showCertificates.component';
import { ShowCertificateComponent} from './showCertificates/showCertificate/showCertificate.component';

const routes: Routes = [
  {path: 'createCertificate', component: CreateCertificateComponent},
  {path: 'showCertificates', component: ShowCertificatesComponent},
  { path: 'showCertificates/each', component: ShowCertificateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

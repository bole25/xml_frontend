import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';
import {ShowCertificatesComponent} from './showCertificates/showCertificates.component';

const routes: Routes = [
  {path: 'createCertificate', component: CreateCertificateComponent},
  {path: 'showCertificates', component: ShowCertificatesComponent},
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

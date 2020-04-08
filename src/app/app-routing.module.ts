import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateCertificateComponent} from './certificatesAdministration/createCertificate/createCertificate.component';

const routes: Routes = [
  {path: 'createCertificate', component: CreateCertificateComponent},
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
